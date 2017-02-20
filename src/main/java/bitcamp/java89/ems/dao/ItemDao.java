package bitcamp.java89.ems.dao;

import java.util.ArrayList;

import bitcamp.java89.ems.domain.Item;

public interface ItemDao {
  ArrayList<Item> getList() throws Exception;
  int countByNo(int memberNo) throws Exception;
  Item getOne(int memberNo) throws Exception;
  int insert(Item item) throws Exception;
  int insertPhoto(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
}