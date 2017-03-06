package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.Item;

public interface ItemService {
  List<Item> getList(int pageNo, int pageSize) throws Exception;
  Item getNowBid() throws Exception;
  Item getDetail(int itemNo) throws Exception;
  int add(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
  List<Item> getSearchTitle(String title) throws Exception;
  int getSize() throws Exception;
}