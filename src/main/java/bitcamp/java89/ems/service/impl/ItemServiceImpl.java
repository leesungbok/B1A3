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
  public int add(Item item) throws Exception {
    int count = itemDao.insert(item);

    if (item.getPhotoList().size() > 0) {
      itemDao.insertPhoto(item);
    }

    return count;
  }

  @Override
  public int update(Item item) throws Exception {
    return itemDao.update(item);
  }

  @Override
  public int delete(int itemNo) throws Exception {
    return itemDao.delete(itemNo);
  }

  @Override
  public List<Item> getList() throws Exception {
    return itemDao.getList();
  }

  @Override
  public Item getDetail(int no) throws Exception {
    return itemDao.getOne(no);
  }
  
  @Override
  public List<Item> getSearchTitle(String title) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("title", title);
    
    List<Item> item = itemDao.getSearchTitle(paramMap);
    
    if (item == null) {
      return null;
      
    }
    return item;
  }
}