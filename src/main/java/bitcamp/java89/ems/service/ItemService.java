package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.Item;

public interface ItemService {
  List<Item> getList(int pageNo, int pageSize) throws Exception;
  List<Item> getList(String categ, int itemNo) throws Exception;
  Item getNowBid(int zero) throws Exception;
  Item getDetail(int itemNo) throws Exception;
  int add(Item item, int type) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
  int getSize() throws Exception;
  List<Item> getMyBidList(int memberNo) throws Exception;
  int getSearchCount(String title, List<String> categoryList, String categoryByAuction, String priceBefore,
      String priceAfter, String search) throws Exception;
  List<Item> getSearchTitle(String title, List<String> categoryList, String categoryByAuction, String priceBefore,
      String priceAfter, String search, int pageNo, int pageSize) throws Exception;
}