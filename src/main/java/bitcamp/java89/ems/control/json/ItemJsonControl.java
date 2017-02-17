package bitcamp.java89.ems.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java89.ems.domain.Item;
import bitcamp.java89.ems.domain.Photo;
import bitcamp.java89.ems.service.ItemService;
import bitcamp.java89.ems.util.MultipartUtil;


@RestController
public class ItemJsonControl {
  @Autowired ItemService itemService;
  @Autowired ServletContext sc;
  
  @RequestMapping("/main/list")
  public AjaxResult list() throws Exception {
    List<Item> list = itemService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
//  @RequestMapping("/main/add")
//  public AjaxResult add(Item item, HttpSession session) throws Exception {
//    Member member = (Member)session.getAttribute("member");
//    if (member == null) {
//      return new AjaxResult(AjaxResult.FAIL, "로그인을 하지 않았습니다.");
//    }
//    
//    item.setMemberNo(member.getMemberNo());
//    itemService.add(item);
//    return new AjaxResult(AjaxResult.SUCCESS, "경매등록이 완료되었습니다.");
//  }
//  
  
  @RequestMapping("/main/add")
  public AjaxResult add(Item item, MultipartFile[] photo) throws Exception {
    ArrayList<Photo> photoList = new ArrayList<>();
    for (MultipartFile file : photo) {
      if (file.getSize() > 0) { 
        String newFilename = MultipartUtil.generateFilename();    
       file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
        photoList.add(new Photo(newFilename));
        }
    }
    item.setPhotoList(photoList);
    itemService.add(item);
    return new AjaxResult(AjaxResult.SUCCESS, "경매등록이 완료되었습니다.");
  }
  
  
  
//  @RequestMapping("/main/update")
//  public AjaxResult update(Item item) throws Exception {
//    return new AjaxResult(AjaxResult.SUCCESS, "경매가 수정되었습니다.");
//  }
//  
 
}
