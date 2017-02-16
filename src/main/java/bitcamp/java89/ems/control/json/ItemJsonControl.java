package bitcamp.java89.ems.control.json;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Item;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.ItemService;


@RestController
public class ItemJsonControl {
  @Autowired ItemService itemService;
  
  @RequestMapping("/main/add")
  public AjaxResult add(Item item, HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "로그인을 하지 않았습니다.");
    }
    
    item.setMemberNo(member.getMemberNo());
    itemService.add(item);
    return new AjaxResult(AjaxResult.SUCCESS, "경매등록이 완료되었습니다.");
  }
  
//  @RequestMapping("/main/update")
//  public AjaxResult update(Item item) throws Exception {
//    return new AjaxResult(AjaxResult.SUCCESS, "경매가 수정되었습니다.");
//  }
//  
 
}
