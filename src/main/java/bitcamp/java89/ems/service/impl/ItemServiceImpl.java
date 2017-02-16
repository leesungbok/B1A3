package bitcamp.java89.ems.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.ItemDao;
import bitcamp.java89.ems.domain.Item;
import bitcamp.java89.ems.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService{
  @Autowired ItemDao itemDao;
  
  @Override
  public int add(Item item) throws Exception {
    return itemDao.insert(item);      
  }

  @Override
  public int update(Item item) throws Exception {
    return itemDao.update(item);
  }

  @Override
  public int delete(int itemNo) throws Exception {
    return itemDao.delete(itemNo);
  }

}
