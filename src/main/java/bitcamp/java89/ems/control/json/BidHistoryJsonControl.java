package bitcamp.java89.ems.control.json;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.BidHistory;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.BidHistoryService;

@RestController
@RequestMapping("/bidhistory/")
public class BidHistoryJsonControl {
  @Autowired BidHistoryService bidHistoryService;

  @RequestMapping("nowbidhistory")
  public AjaxResult nowbidHistory(int itemNo) throws Exception {
    List<BidHistory> bdhs = bidHistoryService.getNowBidHistory(itemNo);

    if (!bdhs.isEmpty()) {
      return new AjaxResult(AjaxResult.SUCCESS, bdhs);
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
}