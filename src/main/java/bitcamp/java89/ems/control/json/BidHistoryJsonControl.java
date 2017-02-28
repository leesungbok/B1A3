package bitcamp.java89.ems.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.BidHistory;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.BidHistoryService;
import bitcamp.java89.ems.service.MemberService;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

@RestController
@RequestMapping("/bidhistory/")
public class BidHistoryJsonControl {
  @Autowired BidHistoryService bidHistoryService;
  @Autowired MemberService memberService;

  @RequestMapping("nowbidhistory")
  public AjaxResult nowbidHistory(int itemNo, HttpSession session) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    
    List<BidHistory> bdhs = bidHistoryService.getNowBidHistory(itemNo);
    Member member = (Member)session.getAttribute("member");
    
    paramMap.put("bdhs", bdhs);
    
    if (member != null) {
      paramMap.put("nickName", member.getNickName());
    }
    
    if (!bdhs.isEmpty()) {
      return new AjaxResult(AjaxResult.SUCCESS, paramMap);
    }

    return new AjaxResult(AjaxResult.FAIL, "현재 경매품 입찰기록을 가져오지 못했습니다.");
  }

  @RequestMapping("add")
  public AjaxResult add(BidHistory bid, HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");

    bid.setMemberNo(member.getMemberNo());

    if (bidHistoryService.add(bid) != 0) {
      return new AjaxResult(AjaxResult.SUCCESS, "입찰 성공했습니다.");
    }

    return new AjaxResult(AjaxResult.FAIL, "입찰 실패했습니다.");
  }
  
  @RequestMapping("sms")
  public AjaxResult sms(String nickName, String title) throws Exception {
    Message coolsms = new Message("NCS58B4FDA4F1C07", "51005CD999726FE18642C3B34BA2FA90");

    HashMap<String, String> params = new HashMap<String, String>();
    params.put("to", memberService.getPhone(nickName));
    params.put("from", "01059600335");
    params.put("type", "SMS");
    params.put("text", "[" + title + "] 입찰순위가 하락했습니다.");
    params.put("app_version", "test app 1.2");

    try {
      JSONObject obj = (JSONObject)coolsms.send(params);
      System.out.println(obj.toString());
      return new AjaxResult(AjaxResult.SUCCESS, obj);
    } catch (CoolsmsException e) {
      System.out.println(e.getMessage());
      System.out.println(e.getCode());
      return new AjaxResult(AjaxResult.FAIL, e.getMessage());
    }
  }
}