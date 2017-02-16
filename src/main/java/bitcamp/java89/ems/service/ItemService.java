package bitcamp.java89.ems.service;

import bitcamp.java89.ems.domain.Item;

public interface ItemService {
  int add(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
}
