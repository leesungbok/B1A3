package bitcamp.java89.ems.control.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems.domain.Qna;
import bitcamp.java89.ems.service.QnaService;

@RestController
@RequestMapping("/qna/")
public class QnaJsonControl {
  @Autowired QnaService quaService;

  @RequestMapping(value="list", method=RequestMethod.GET)
  public AjaxResult getList(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int pageSize,
      @RequestParam(required=false) boolean answerCheck,
      @RequestParam(required=false) boolean questionCheck,
      @RequestParam(required=false) String question,
      int itemNo) throws Exception {
    if (pageNo < 1) {
      pageNo = 1;
    }

    if (pageSize < 5 || pageSize > 20) {
      pageSize = 5;
    }

    List<Qna> list = quaService.getList(itemNo, answerCheck, questionCheck, question, pageNo, pageSize);
    int totalCount = quaService.getSize(itemNo, answerCheck, questionCheck, question);

    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list", list);
    resultMap.put("totalCount", totalCount);

    if (!list.isEmpty()) {
      return new AjaxResult(AjaxResult.SUCCESS, resultMap);
    }
    return new AjaxResult(AjaxResult.FAIL, "상품 문의가 없습니다.");
  }

  @RequestMapping(value="addQuestion", method=RequestMethod.POST)
  public AjaxResult addQuestion(int memberNo, int itemNo, String question) throws Exception {
    if (quaService.addQuestion(memberNo, itemNo, question) != 0) {
      return new AjaxResult(AjaxResult.SUCCESS, "상품 문의 등록 성공했습니다.");
    }
    return new AjaxResult(AjaxResult.FAIL, "상품 문의 등록 실패했습니다.");
  }

  @RequestMapping(value="addAnswer", method=RequestMethod.POST)
  public AjaxResult addAnswer(String answer, int questionNo) throws Exception {
    if (quaService.addAnswer(answer, questionNo) != 0) {
      return new AjaxResult(AjaxResult.SUCCESS, "상품 문의 답변 등록 성공했습니다.");
    }
    return new AjaxResult(AjaxResult.FAIL, "상품 문의 답변 등록 실패했습니다.");
  }

  @RequestMapping(value="updateQuestion", method=RequestMethod.POST)
  public AjaxResult updateQuestion(String question, int questionNo) throws Exception {
    if (quaService.updateQuestion(question, questionNo) != 0) {
      return new AjaxResult(AjaxResult.SUCCESS, "상품 문의 변경 성공했습니다.");
    }
    return new AjaxResult(AjaxResult.FAIL, "상품 문의 변경 실패했습니다.");
  }

  @RequestMapping(value="deleteQuestion", method=RequestMethod.POST)
  public AjaxResult deleteQuestion(int questionNo) throws Exception {
    if (quaService.deleteQuestion(questionNo) != 0) {
      return new AjaxResult(AjaxResult.SUCCESS, "상품 문의 삭제 성공했습니다."); 
    }
    return new AjaxResult(AjaxResult.FAIL, "상품 문의 삭제 실패했습니다.");
  }
}