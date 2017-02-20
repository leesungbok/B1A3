package ems.control.json;

import java.io.File;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ems.control.domain.Member;
import ems.control.service.MemberService;
import ems.control.util.MultipartUtil;

//@Controller
@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
public class MemberJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired MemberService memberService;
  
  @RequestMapping("/member/list")
  public AjaxResult list() throws Exception {
    List<Member> list = memberService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/member/detail")
  public AjaxResult detail(int memberNo) throws Exception {
    Member member = memberService.getDetail(memberNo);
    
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 학생이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, member);
  }
  
  @RequestMapping("/member/add")
  public AjaxResult add(Member member) throws Exception {
    memberService.add(member);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }

  @RequestMapping("/member/delete")
  public AjaxResult delete(int memberNo, HttpServletRequest request) throws Exception {
    int count = memberService.delete(memberNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/member/update")
  public AjaxResult update(Member member, MultipartFile photo) throws Exception {
    
    if (photo != null && photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      member.setPhotoPath(newFilename);
    }
    
    int count = memberService.update(member);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
}




