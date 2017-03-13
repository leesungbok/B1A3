package bitcamp.java89.ems.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Item;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.ItemService;

@RestController
public class ItemJsonControl {
  @Autowired ItemService itemService;

  @RequestMapping("/main/nowbid")
  public AjaxResult nowbid() throws Exception {
    Item nowBid = itemService.getNowBid(0);

    if (nowBid != null) {
      return new AjaxResult(AjaxResult.SUCCESS, nowBid);
    }

    return new AjaxResult(AjaxResult.FAIL, "현재 경매품 정보를 가져오지 못했습니다."); 
  }

  @RequestMapping("/main/list")
  public AjaxResult list(int pageNo, int pageSize) throws Exception {
    List<Item> list = itemService.getList(pageNo, pageSize);
    int totalCount = itemService.getSize();

    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list", list);
    resultMap.put("totalCount", totalCount);
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }

  @RequestMapping("/main/detail")
  public AjaxResult list(int itemNo) throws Exception {
    Item item = itemService.getDetail(itemNo);

    if (item != null) {
      return new AjaxResult(AjaxResult.SUCCESS, item);
    }

    return new AjaxResult(AjaxResult.FAIL, "해당 경매품 정보를 가져오지 못했습니다."); 
  }

  @RequestMapping("/main/add")
  public AjaxResult add(Item item, HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    item.setMemberNo(member.getMemberNo());

    if (itemService.add(item) == 0) {
      return new AjaxResult(AjaxResult.FAIL, "경매등록에 실패했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "경매등록에 성공했습니다.");
  }
  
  @RequestMapping("/search/searchTitle")
  public AjaxResult searchTitle(String title,
      @RequestParam (value = "categoryList", required=false) List<String> categoryList,
      @RequestParam (value= "categoryByAuction") String categoryByAuction ,
      @RequestParam (value= "priceBefore", required=false) String priceBefore ,
      @RequestParam (value= "priceAfter", required=false) String priceAfter ,
      @RequestParam (value= "search", required=false) String search,
      int pageNo, int pageSize) throws Exception {
    int totalCount = itemService.getSearchCount(title, categoryList, categoryByAuction, 
        priceBefore, priceAfter, search);
    List<Item> item = itemService.getSearchTitle(title, categoryList, categoryByAuction, 
        priceBefore, priceAfter, search, pageNo, pageSize);
    System.out.println(totalCount);
    System.out.println(item);
    
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("item", item);
    resultMap.put("totalCount", totalCount);
    System.out.println(resultMap);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  @RequestMapping("/mypage/mybidlist")
  public AjaxResult myBidList(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    List<Item> myBidList = itemService.getMyBidList(member.getMemberNo());
    System.out.println(myBidList.size());
    if (!myBidList.isEmpty()) {
      return new AjaxResult(AjaxResult.SUCCESS, myBidList);
    }
    return new AjaxResult(AjaxResult.FAIL, "나의경매를 가져오는데 실패했습니다.");
  }
}