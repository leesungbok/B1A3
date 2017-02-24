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

//  @RequestMapping("/main/add")
//  public AjaxResult add(Like like, HttpSession session) throws Exception {
//    String[] likefiles = like.getReadTime().replaceAll("\\[", "").replaceAll("\\]", "").replaceAll("\"", "").split(",");
//    Item item = (Item)session.getAttribute("item");
//    
//    ArrayList<Item> sitemList = new ArrayList<>();
//    
//    for (String likefile : likefiles) {
//      itemList.add(new Item(likefile));
//    }
//    
//    like.setItemList(itemList);
//    like.setItemNo(item.getItemNo());
//    
//    if (likeService.add(like) == 0) {
//      return new AjaxResult(AjaxResult.FAIL, "관심상품 등록 실패");
//    }
//    return new AjaxResult(AjaxResult.SUCCESS, "관심상품 등록 성공");
//  }
  
  @RequestMapping("/mypage/add")
  public AjaxResult add(Like like) throws Exception {
    likeService.add(like);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/mypage/delete")
  public AjaxResult delete(int likeNo, HttpSession session) throws Exception {
    int count = likeService.delete(likeNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 관심상품이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
}