package bitcamp.java89.ems.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.ItemDao;
import bitcamp.java89.ems.domain.Item;
import bitcamp.java89.ems.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {
  @Autowired ItemDao itemDao;

  @Override
  public int add(Item item, int type) throws Exception {
    itemDao.insert(item, type);

    if (item.getPhotoList().size() > 0) {
      itemDao.insertPhoto(item);
    }

    return item.getItemNo();
  }

  @Override
  public int update(Item item) throws Exception {
    return itemDao.update(item);
  }

  @Override
  public int delete(int itemNo) throws Exception {
    itemDao.deletePhoto(itemNo);
    itemDao.deleteInter(itemNo);
    
    int count = itemDao.delete(itemNo);
    int highestItemNo = itemDao.getHighestItemNo();
    
    for (int i = itemNo+1; i <= highestItemNo; i++) {
      itemDao.updateStartTime(i);
    }
    return count;
  }

  @Override
  public List<Item> getList(int pageNo, int pageSize) throws Exception {
    return itemDao.getList((pageNo - 1) * pageSize, pageSize);
  }

  @Override
  public Item getDetail(int itemNo) throws Exception {
    return itemDao.getOne(itemNo);
  }  
  
  @Override
  public List<Item> getSearchTitle(String title, List<String> categoryList, String categoryByAuction, String priceBefore,
    String priceAfter, String search, int pageNo, int pageSize) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("title", title); 
    paramMap.put("categoryList", categoryList);
    paramMap.put("categoryByAuction", categoryByAuction);
    paramMap.put("priceBefore", priceBefore);
    paramMap.put("priceAfter", priceAfter);
    paramMap.put("search", search);
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    List<Item> item = itemDao.getSearchTitle(paramMap);
    if (item == null) {
      return null;
      
    }
    return item;
  }

  @Override
  public Item getNowBid(int zero) throws Exception {
    return itemDao.getOne(zero);
  } 

  @Override
  public int getSize() throws Exception {
    return itemDao.countAll();
  }

  @Override
  public int getSearchCount(String title, List<String> categoryList, String categoryByAuction,
      String priceBefore, String priceAfter, String search) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("title", title);
    paramMap.put("categoryList", categoryList);
    paramMap.put("categoryByAuction", categoryByAuction);
    paramMap.put("priceBefore", priceBefore);
    paramMap.put("priceAfter", priceAfter);
    paramMap.put("search", search);
    return itemDao.getSearchCount(paramMap);
  }
  
  @Override
  public List<Item> getMyBidList(int memberNo) throws Exception {
    return itemDao.getMyBidList(memberNo);
  }

  @Override
  public List<Item> getList(String categ, int itemNo) throws Exception {
    return itemDao.getListByCateg(categ, itemNo);
  }

}