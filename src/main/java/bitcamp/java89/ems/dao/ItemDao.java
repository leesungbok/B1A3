package bitcamp.java89.ems.dao;

import bitcamp.java89.ems.domain.Item;

public interface ItemDao {
  int insert(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
  
}
