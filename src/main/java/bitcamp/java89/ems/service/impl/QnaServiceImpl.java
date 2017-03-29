package bitcamp.java89.ems.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.QnaDao;
import bitcamp.java89.ems.domain.Qna;
import bitcamp.java89.ems.service.QnaService;

@Service
public class QnaServiceImpl implements QnaService {
  @Autowired QnaDao qnaDao;

  @Override
  public List<Qna> getList(int itemNo, boolean answerCheck, boolean questionCheck, String question, int pageNo, int pageSize) throws Exception {
    int startRowIndex = ((pageNo - 1) * pageSize);
    return qnaDao.getList(itemNo, answerCheck, questionCheck, question, startRowIndex, pageSize);
  }

  @Override
  public int addQuestion(int memberNo, int itemNo, String question) throws Exception {
    return qnaDao.insertQuestion(memberNo, itemNo, question);
  }

  @Override
  public int addAnswer(String answer, int questionNo) throws Exception {
    return qnaDao.insertAnswer(answer, questionNo);
  }

  @Override
  public int getSize(int itemNo, boolean answerCheck, boolean questionCheck, String question) throws Exception {
    return qnaDao.count(itemNo, answerCheck, questionCheck, question);
  }

  @Override
  public int updateQuestion(String question, int questionNo) throws Exception {
    return qnaDao.updateQuestion(question, questionNo);
  }

  @Override
  public int deleteQuestion(int questionNo) throws Exception {
    return qnaDao.deleteQuestion(questionNo);
  }
}