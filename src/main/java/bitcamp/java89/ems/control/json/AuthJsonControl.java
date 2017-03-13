package bitcamp.java89.ems.control.json;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.AuthService;
import bitcamp.java89.ems.service.MemberService;

@RestController
public class AuthJsonControl {
  @Autowired MemberService memberService;
  @Autowired AuthService authService;

  @RequestMapping("/auth/login")
  public AjaxResult login(String email, String password,
      HttpServletResponse response, HttpSession session, Model model) throws Exception {
    
    Member member = authService.getMemberInfo(email, password);
        
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "이메일 또는 암호가 틀리거나, 가입된 회원이 아닙니다.");
    }
    
    session.setAttribute("member", member); // HttpSession에 저장한다.
    return new AjaxResult(AjaxResult.SUCCESS, "로그인 성공!");
  }
  
  @RequestMapping("/auth/loginsns")
  public AjaxResult loginSNS(String type, String snsId, HttpSession session) throws Exception {
    
    Member member = authService.getOneBySNS(type, snsId);
    
    if (member != null) {
      session.setAttribute("member", member); // HttpSession에 저장한다.
      return new AjaxResult(AjaxResult.SUCCESS, "로그인 성공!");
    } else {
      return new AjaxResult(AjaxResult.FAIL, "로그인 실패!");
    }
  }
  
  @RequestMapping("/auth/logout")
  public AjaxResult logout(HttpSession session) throws Exception {
    session.invalidate(); // 기존 세션을 무효화시킨다.
    return new AjaxResult(AjaxResult.SUCCESS, "로그아웃 성공입니다.");
  }
  
  @RequestMapping("/auth/loginUser")
  public AjaxResult loginUser(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    
    if (member == null) { // 로그인이 되지 않은 상태
      return new AjaxResult(AjaxResult.FAIL, "로그인을 하지 않았습니다.");
    }
    
    Member getMember = memberService.getOne(member.getMemberNo());

    if (getMember == null) {
      return new AjaxResult(AjaxResult.FAIL, "회원 정보가 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, getMember);
  }
  
  @RequestMapping("/auth/add")
  public AjaxResult add(Member member) throws Exception {
    memberService.add(member);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
}