package bitcamp.java89.ems.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
    
    if (list.isEmpty()) {
      return new AjaxResult(AjaxResult.FAIL, "다음 경매가 없습니다.");
    }
    
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
  public AjaxResult add(Item item, int type, HttpSession session) throws Exception {
    System.out.println(item);
    Member member = (Member)session.getAttribute("member");
    item.setMemberNo(member.getMemberNo());
    int itemNo = itemService.add(item, type);
    if (itemNo == 0) {
      return new AjaxResult(AjaxResult.FAIL, "경매등록에 실패했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, itemNo);
  }

  @RequestMapping(value="/item/delete", method=RequestMethod.POST)
  public AjaxResult delete(int itemNo, HttpSession session) throws Exception {
    Item item = itemService.getDetail(itemNo);
    Item nowItem = itemService.getDetail(0); // 현재 경매

    Member member = (Member)session.getAttribute("member");

    // 로그인 안했거나, 등록한 사용자가 아닌 사람이거나, 지난경매품인 경우 삭제금지
    if (member == null || item.getMemberNo() != member.getMemberNo()) {
      return new AjaxResult(AjaxResult.FAIL, "지난 경매는 자동으로 삭제되며 진행중인 경매는 삭제할 수 없습니다.\n시작되지 않은 경매만 삭제 가능합니다.");
    }

    if (itemService.delete(itemNo) != 0) {
      return new AjaxResult(AjaxResult.SUCCESS, "경매삭제에 성공했습니다.");
    }
    return new AjaxResult(AjaxResult.FAIL, "경매삭제에 실패했습니다.");
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
  
  @RequestMapping("/item/relation")
  public AjaxResult lisyByCateg(String categ, int itemNo) throws Exception {
    List<Item> list = itemService.getList(categ, itemNo);
    if (!list.isEmpty()) {
      return new AjaxResult(AjaxResult.SUCCESS, list);
    }
    return new AjaxResult(AjaxResult.FAIL, "관련 상품이 없습니다.");
  }
  
  @RequestMapping("/item/mybidlist")
  public AjaxResult myBidList(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    
    if (member != null) {
      List<Item> myBidList = itemService.getMyBidList(member.getMemberNo());
      System.out.println(myBidList.size());
      if (!myBidList.isEmpty()) {
        return new AjaxResult(AjaxResult.SUCCESS, myBidList);
      }
      return new AjaxResult(AjaxResult.FAIL, "나의경매를 가져오는데 실패했습니다.");
    }
    
    return new AjaxResult(AjaxResult.FAIL, "나의경매를 가져오는데 실패했습니다.");
  }
  
  
  @RequestMapping("/item/mybidupdate")
  public AjaxResult update(Item editItem, HttpSession session) throws Exception {
    if (editItem == null) {
      return new AjaxResult(AjaxResult.FAIL, "수정된 나의 경매 정보가 없습니다.");
    }
    
    Item item = (Item)session.getAttribute("item");
    editItem.setItemNo(item.getItemNo());
    
    if (itemService.update(editItem) == 0) {
      return new AjaxResult(AjaxResult.FAIL, "나의 경매 수정에 실패했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "나의 경매 수정에 성공했습니다.");
  }
  
  
}