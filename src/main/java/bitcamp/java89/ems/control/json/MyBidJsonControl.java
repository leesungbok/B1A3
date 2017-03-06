package bitcamp.java89.ems.control.json;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.domain.MyBid;
import bitcamp.java89.ems.service.MyBidService;


@RestController
public class MyBidJsonControl {
  @Autowired MyBidService myBidService;
  @Autowired ServletContext sc;

  @RequestMapping("/mybid/list")
  public AjaxResult list(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    List<MyBid> list = myBidService.getMyBidList(member.getMemberNo());
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

  
  @RequestMapping("/mybid/delete")
  public AjaxResult delete(int itemNo, HttpSession session) throws Exception {
    int count = myBidService.delete(itemNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "내가 등록한 상품이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공!!");
  }
}