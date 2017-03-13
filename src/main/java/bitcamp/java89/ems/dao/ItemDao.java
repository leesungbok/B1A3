package bitcamp.java89.ems.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import bitcamp.java89.ems.domain.Item;

public interface ItemDao {
  ArrayList<Item> getList(@Param("startRowIndex") int startRowIndex, @Param("rowSize") int rowSize) throws Exception;
  Item getOne(int itemNo) throws Exception;
  int countByNo(int memberNo) throws Exception;
  int countAll() throws Exception;
  int insert(Item item) throws Exception;
  int insertPhoto(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
  List<Item> getSearchTitle(HashMap<String, Object> paramMap)throws Exception;
  List<Item> getListByCateg(@Param("categ") String categ, @Param("itemNo") int itemNo) throws Exception;
  int getSearchCount(HashMap<String, Object> paramMap) throws Exception;
}