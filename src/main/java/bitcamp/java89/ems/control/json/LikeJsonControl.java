package bitcamp.java89.ems.control.json;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Like;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.LikeService;


@RestController
public class LikeJsonControl {
  @Autowired LikeService likeService;
  @Autowired ServletContext sc;

  @RequestMapping("/mypage/list")
  public AjaxResult list(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    List<Like> list = likeService.getLikeList(member.getMemberNo());
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/mypage/recentList")
  public AjaxResult recentList(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    List<Like> recentList = likeService.getrecentList(member.getMemberNo());
    return new AjaxResult(AjaxResult.SUCCESS, recentList);
  }
  
  @RequestMapping("/mypage/add")
  public AjaxResult add(Like like) throws Exception {
    likeService.add(like);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/mypage/recentUpdate")
  public AjaxResult recentUpdate(Like like) throws Exception {
    likeService.update(like);
    return new AjaxResult(AjaxResult.SUCCESS, "업데이트 성공입니다.");
  }
  
  @RequestMapping("/mypage/check")
  public AjaxResult check(int memberNo, int itemNo) throws Exception {
    String count = likeService.check(memberNo, itemNo);
    return new AjaxResult(AjaxResult.SUCCESS, count);
  }  
  
  @RequestMapping("/mypage/delete")
  public AjaxResult delete(int likeNo, int memberNo) throws Exception {
//    System.out.println("likeNo : " + likeNo + "     mNo : " + memberNo);
    int count = likeService.delete(likeNo, memberNo);
    System.out.println(count);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 관심상품이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  @RequestMapping("/mypage/recentDelete")
  public AjaxResult recentDelete(int likeNo, int memberNo) throws Exception {
    int count = likeService.delete(likeNo, memberNo);
    System.out.println(count);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 관심상품이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
}