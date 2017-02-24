package bitcamp.java89.ems.control.json;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.BidHistory;
import bitcamp.java89.ems.domain.Item;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.domain.Photo;
import bitcamp.java89.ems.service.ItemService;

@RestController
public class ItemJsonControl {
  @Autowired ItemService itemService;
  @Autowired ServletContext sc;

  @RequestMapping("/main/nowbid")
  public AjaxResult nowbid() throws Exception {
    Item nowBid = itemService.getNowBid();

    if (nowBid != null) {
      return new AjaxResult(AjaxResult.SUCCESS, nowBid);
    }

    return new AjaxResult(AjaxResult.FAIL, "현재 경매품 정보를 가져오지 못했습니다."); 
  }

  @RequestMapping("/main/nowbidhistory")
  public AjaxResult nowbidHistory(int itemNo) throws Exception {
    List<BidHistory> bdhs = itemService.getNowBidHistory(itemNo);

    if (!bdhs.isEmpty()) {
      return new AjaxResult(AjaxResult.SUCCESS, bdhs);
    }

    return new AjaxResult(AjaxResult.FAIL, "현재 경매품 입찰기록을 가져오지 못했습니다."); 
  }

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
  
  @RequestMapping("/item/searchTitle")
  public AjaxResult searchTitle(String title, HttpSession session) throws Exception {
    List<Item> item = itemService.getSearchTitle(title);
    System.out.println(item);
    
    if (item == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 상품을 찾지 못하였습니다");
    }
    
    session.setAttribute("title", title);
    return new AjaxResult(AjaxResult.SUCCESS, item);
  }
}