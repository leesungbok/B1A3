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
  
  @RequestMapping("/mypage/updatePhoto")
  public AjaxResult updatePhoto(String photoPath, HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    if (memberService.updatePhoto(member.getEmail(), photoPath) == 0) {
      return new AjaxResult(AjaxResult.FAIL, "사진 변경 실패했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "사진 변경 성공했습니다.");
  }
  
  @RequestMapping("/mypage/delete1")
  public AjaxResult updatePhoto(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    if (memberService.delete(member.getMemberNo()) == 0) {
      return new AjaxResult(AjaxResult.FAIL, "회원 삭제 실패했습니다.");
    }
    session.invalidate();
    return new AjaxResult(AjaxResult.SUCCESS, "회원 삭제 성공했습니다.");
  }
}