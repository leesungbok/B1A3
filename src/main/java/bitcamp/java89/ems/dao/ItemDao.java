package bitcamp.java89.ems.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java89.ems.domain.Item;

public interface ItemDao {
  ArrayList<Item> getList(Map<String,Object> paramMap) throws Exception;
  Item getNowBid() throws Exception;
  Item getOne(int itemNo) throws Exception;
  int countByNo(int memberNo) throws Exception;
  int countAll() throws Exception;
  int insert(Item item) throws Exception;
  int insertPhoto(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
  List<Item> getSearchTitle(HashMap<String, String> paramMap)throws Exception;
  List<Item> getCategory(HashMap<String, Object> paramMap)throws Exception;
}