package bitcamp.java89.ems.control.json;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.MemberService;

@RestController
public class MypageJsonControl {
  @Autowired MemberService memberService;

  @RequestMapping("mypage/getOne")
  public AjaxResult getMemberInfo(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "로그인이 필요한 항목입니다."); 
    }
    return new AjaxResult(AjaxResult.SUCCESS, member);
  }
}