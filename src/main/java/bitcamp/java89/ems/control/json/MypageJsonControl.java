package bitcamp.java89.ems.control.json;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.BidHistoryService;
import bitcamp.java89.ems.service.MemberService;

@RestController
public class MypageJsonControl {
  @Autowired MemberService memberService;
  @Autowired BidHistoryService bidHistoryService;
  
  @RequestMapping("/mypage/updatePhoto")
  public AjaxResult updatePhoto(String photoPath, HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    if (memberService.updatePhoto(member.getMemberNo(), photoPath) == 0) {
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
  
  @RequestMapping("/mypage/update")
  public AjaxResult update(Member editMember, HttpSession session) throws Exception {
    if (editMember == null) {
      return new AjaxResult(AjaxResult.FAIL, "수정된 회원정보가 없습니다.");
    }
    
    Member member = (Member)session.getAttribute("member");
    editMember.setMemberNo(member.getMemberNo());
    
    if (memberService.update(editMember) == 0) {
      return new AjaxResult(AjaxResult.FAIL, "회원 수정 실패했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "회원 수정 성공했습니다.");
  }
  
}