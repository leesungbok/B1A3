package bitcamp.java89.ems.control.json;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Item;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.domain.Photo;
import bitcamp.java89.ems.service.ItemService;

@RestController
public class ItemJsonControl {
  @Autowired ItemService itemService;
  @Autowired ServletContext sc;

  @RequestMapping("/main/list")
  public AjaxResult list() throws Exception {
    List<Item> list = itemService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

  @RequestMapping("/main/add")
  public AjaxResult add(Item item, HttpSession session) throws Exception {
    String[] files = item.getStartTime().replaceAll("\\[", "").replaceAll("\\]", "").replaceAll("\"", "").split(",");
    Member member = (Member)session.getAttribute("member");
    
    ArrayList<Photo> photoList = new ArrayList<>();
    
    for (String file : files) {
      photoList.add(new Photo(file));
    }

    item.setPhotoList(photoList);
    item.setMemberNo(member.getMemberNo());

    if (itemService.add(item) == 0) {
      return new AjaxResult(AjaxResult.FAIL, "경매등록에 실패했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "경매등록에 성공했습니다.");
  }
}