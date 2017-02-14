package bitcamp.java89.ems.control.json;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.MemberService;

@RestController
public class AuthJsonControl {
  @Autowired MemberService memberService;

  @RequestMapping("/auth/add")
  public AjaxResult add(Member member) throws Exception {
    memberService.add(member);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
}