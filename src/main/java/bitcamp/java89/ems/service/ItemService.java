package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.Item;

public interface ItemService {
  List<Item> getList() throws Exception;
  Item getDetail(int no) throws Exception;
  int add(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
}
