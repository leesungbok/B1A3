package bitcamp.java89.ems.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.MyBidDao;
import bitcamp.java89.ems.domain.MyBid;
import bitcamp.java89.ems.service.MyBidService;

@Service
public class MyBidServiceImpl implements MyBidService {
  @Autowired MyBidDao myBidDao;


  @Override
  public int delete(int itemNo) throws Exception {
    return myBidDao.delete(itemNo);
  }

  @Override
  public List<MyBid> getMyBidList(int memberNo) throws Exception {
    return myBidDao.getMyBidList(memberNo);
  }
}