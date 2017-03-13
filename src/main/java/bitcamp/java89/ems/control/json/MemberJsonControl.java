package bitcamp.java89.ems.control.json;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.MemberService;

@RestController
public class MemberJsonControl {
  @Autowired MemberService memberService;

  @RequestMapping("/member/searchMember")
  public AjaxResult searchMember(String nickName, HttpSession session) throws Exception {
    List<Member> member = memberService.getSearchMember(nickName);
    
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 닉네임을 찾지 못하였습니다");
    }
    
    session.setAttribute("nickName", nickName);
    return new AjaxResult(AjaxResult.SUCCESS, member);
  }
}