package bitcamp.java89.ems.control;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import bitcamp.java89.ems.domain.BidHistory;
import bitcamp.java89.ems.service.BidHistoryService;
import bitcamp.java89.ems.service.MemberService;

@Configuration
@EnableAsync
@EnableScheduling
public class SchedulingControl {
  @Autowired BidHistoryService bidHistoryService;
  @Autowired MemberService memberService;
  List<BidHistory> bdhs;
  SimpleDateFormat transFormat;
  Date to, now;
  Calendar cal;
  
  // 5분 간격으로 낙찰받은 사람 중 제한 시간내에 결제를 안한 사람을 찾아 상태를 주문취소로 바꾼다.
  @Scheduled(fixedRate=1000*60*5) // 5분마다 반복
  public void updateBiddhistoryState() throws Exception {
    bdhs = bidHistoryService.getBeforeBidHistory();

    if (!bdhs.isEmpty()) {
      now = new Date(); // 현재시간을 구한다.

      transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
      to = transFormat.parse(bdhs.get(0).getStartTime()); // 시작시간을 구한다.
      cal = Calendar.getInstance();
      cal.setTime(to);
      cal.add(Calendar.MINUTE, 30); // 종료시간을 구한다.

      changeState(cal, now, bdhs); // 상태를 주문취소로 바꾼다.
    } else {
    //System.out.println("전 경매의 입찰기록이 없습니다.");
    }
  }

  // 30분 간격으로 낙찰자에게 SMS 알림 메세지를 보낸다.
  @Scheduled(fixedRate=1000*60*30) // 30분마다 반복
  public void smsWinning() throws Exception {
    bdhs = bidHistoryService.getBeforeBidHistory();

    if (!bdhs.isEmpty()) {
      transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
      to = transFormat.parse(bdhs.get(0).getStartTime()); // 시작시간을 구한다.
      cal = Calendar.getInstance();
      cal.setTime(to);
      cal.add(Calendar.MINUTE, 35); // 결제 제한시간을 구한다.

      String text = "[" + bdhs.get(0).getTitle() + "] " + "낙찰을 축하드립니다. " + 
          cal.get(Calendar.HOUR) + "시" + cal.get(Calendar.MINUTE) + "분 전까지 결제하세요.";
      System.out.println(bdhs.get(0).getNickName());
      System.out.println(text);
      //sms(bdhs.get(0).getNickName(), text);
    }
  }

  private void changeState(Calendar cal, Date now, List<BidHistory> bdhs) throws Exception {
    for (int i = 0; i < bdhs.size(); i++) {
      if (cal.getTime().compareTo(now) != -1 || bdhs.get(i).getState() == 1) {
        break;
      } else if (bdhs.get(i).getState() == 0) {
        bidHistoryService.updateState(bdhs.get(i).getItemNo(), bdhs.get(i).getBids(), 2);
        cal.add(Calendar.MINUTE, 5);
        if (i < bdhs.size()-1) {
          String text = "[" + bdhs.get(0).getTitle() + "] " + "낙찰을 축하드립니다. " + 
              cal.get(Calendar.HOUR) + "시" + cal.get(Calendar.MINUTE) + "분 전까지 결제하세요.";
          System.out.println(bdhs.get(i+1).getNickName());
          System.out.println(text);
          /*sms(bdhs.get(i).getNickName(), text);*/
        }
      } else {
        cal.add(Calendar.MINUTE, 5);
      }
    }
  }

  /*private void sms(String nickName, String text) throws Exception {
    Message coolsms = new Message("NCS58B4FDA4F1C07", "51005CD999726FE18642C3B34BA2FA90");

    HashMap<String, String> params = new HashMap<String, String>();
    params.put("to", memberService.getPhone(nickName));
    params.put("from", "01059600335");
    params.put("type", "SMS");
    params.put("text", text);
    params.put("app_version", "test app 1.2");

    try {
      JSONObject obj = (JSONObject)coolsms.send(params);
      System.out.println(obj.toString());
    } catch (CoolsmsException e) {
      System.out.println(e.getMessage());
      System.out.println(e.getCode());
    }
  }*/
}