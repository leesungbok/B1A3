-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 회원
CREATE TABLE `MEMB` (
  `MNO`     INTEGER      NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `EMAIL`   VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
  `NKNM`    VARCHAR(6)   NOT NULL COMMENT '닉네임', -- 닉네임
  `PHON`    VARCHAR(30)  NOT NULL COMMENT '휴대폰', -- 휴대폰
  `PWD`     VARCHAR(50)  NOT NULL COMMENT '비밀번호', -- 비밀번호
  `PATH`    VARCHAR(255) NULL     COMMENT '사진경로', -- 사진경로
  `PST_NO`  VARCHAR(10)  NULL     COMMENT '우편번호', -- 우편번호
  `BAS_ADR` VARCHAR(255) NULL     COMMENT '기본주소', -- 기본주소
  `DET_ADR` VARCHAR(255) NULL     COMMENT '상제주소', -- 상제주소
  `TEL`     VARCHAR(30)  NULL     COMMENT '전화번호', -- 전화번호
  `FCBK`    VARCHAR(30)  NULL     COMMENT '페이스북', -- 페이스북
  `KATOK`   VARCHAR(30)  NULL     COMMENT '카카오톡', -- 카카오톡
  `NAVER`   VARCHAR(30)  NULL     COMMENT '네이버' -- 네이버
)
COMMENT '회원';

-- 회원
ALTER TABLE `MEMB`
  ADD CONSTRAINT `PK_MEMB` -- 회원 기본키
    PRIMARY KEY (
      `MNO` -- 회원일련번호
    );

-- 이메일 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB`
  ON `MEMB` ( -- 회원
    `EMAIL` ASC -- 이메일
  );

-- 닉네임 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB2`
  ON `MEMB` ( -- 회원
    `NKNM` ASC -- 닉네임
  );

-- 휴대폰 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB3`
  ON `MEMB` ( -- 회원
    `PHON` ASC -- 휴대폰
  );

-- 페이스북 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB4`
  ON `MEMB` ( -- 회원
    `FCBK` ASC -- 페이스북
  );

-- 카카오톡 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB5`
  ON `MEMB` ( -- 회원
    `KATOK` ASC -- 카카오톡
  );

-- 네이버 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB6`
  ON `MEMB` ( -- 회원
    `NAVER` ASC -- 네이버
  );

ALTER TABLE `MEMB`
  MODIFY COLUMN `MNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 상품사진
CREATE TABLE `PHOT` (
  `PNO`  INTEGER      NOT NULL COMMENT '상품사진일련번호', -- 상품사진일련번호
  `ITNO` INTEGER      NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `PATH` VARCHAR(255) NOT NULL COMMENT '사진경로' -- 사진경로
)
COMMENT '상품사진';

-- 상품사진
ALTER TABLE `PHOT`
  ADD CONSTRAINT `PK_PHOT` -- 상품사진 기본키
    PRIMARY KEY (
      `PNO` -- 상품사진일련번호
    );

ALTER TABLE `PHOT`
  MODIFY COLUMN `PNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품사진일련번호';

-- 나의관심
CREATE TABLE `INTER` (
  `MNO`  INTEGER  NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `ITNO` INTEGER  NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `TYPE` INTEGER  NULL     COMMENT '유형', -- 유형
  `RDT`  DATETIME NULL     COMMENT '등록일' -- 등록일
)
COMMENT '나의관심';

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `PK_INTER` -- 나의관심 기본키
    PRIMARY KEY (
      `MNO`,  -- 회원일련번호
      `ITNO`  -- 상품일련번호
    );

-- 입찰기록
CREATE TABLE `BDHS` (
  `HSNO` INTEGER  NOT NULL COMMENT '입찰기록일련번호', -- 입찰기록일련번호
  `MNO`  INTEGER  NOT NULL COMMENT '입찰자', -- 입찰자
  `ITNO` INTEGER  NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `BIDS` INTEGER  NOT NULL COMMENT '입찰가', -- 입찰가
  `TIME` DATETIME NOT NULL COMMENT '입찰시간', -- 입찰시간
  `STAT` INTEGER  NOT NULL DEFAULT 0 COMMENT '결제상태' -- 결제상태
)
COMMENT '입찰기록';

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `PK_BDHS` -- 입찰기록 기본키
    PRIMARY KEY (
      `HSNO` -- 입찰기록일련번호
    );

ALTER TABLE `BDHS`
  MODIFY COLUMN `HSNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '입찰기록일련번호';

-- 상품
CREATE TABLE `ITEM` (
  `ITNO`  INTEGER     NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `MNO`   INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `TITL`  VARCHAR(30) NOT NULL COMMENT '제목', -- 제목
  `CATEG` VARCHAR(10) NOT NULL COMMENT '카테고리', -- 카테고리
  `BUY`   DATETIME    NOT NULL COMMENT '구입시기', -- 구입시기
  `DAY`   VARCHAR(30) NOT NULL COMMENT '사용일수', -- 사용일수
  `DEAL`  VARCHAR(10) NOT NULL COMMENT '거래방식', -- 거래방식
  `CONT`  TEXT        NULL     COMMENT '상세설명', -- 상세설명
  `TIME`  DATETIME    NOT NULL COMMENT '시작시간', -- 시작시간
  `STPC`  INTEGER     NOT NULL COMMENT '시작가' -- 시작가
)
COMMENT '상품';

-- 상품
ALTER TABLE `ITEM`
  ADD CONSTRAINT `PK_ITEM` -- 상품 기본키
    PRIMARY KEY (
      `ITNO` -- 상품일련번호
    );

ALTER TABLE `ITEM`
  MODIFY COLUMN `ITNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품일련번호';

-- 채팅
CREATE TABLE `CHAT` (
  `CHNO` INTEGER  NOT NULL COMMENT '채팅일련번호', -- 채팅일련번호
  `BMNO` INTEGER  NOT NULL COMMENT '보내는회원일련번호', -- 보내는회원일련번호
  `SMNO` INTEGER  NOT NULL COMMENT '판매자회원일련번호', -- 판매자회원일련번호
  `CONT` TEXT     NOT NULL COMMENT '내용', -- 내용
  `TIME` DATETIME NOT NULL COMMENT '보낸시간' -- 보낸시간
)
COMMENT '채팅';

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `PK_CHAT` -- 채팅 기본키
    PRIMARY KEY (
      `CHNO` -- 채팅일련번호
    );

ALTER TABLE `CHAT`
  MODIFY COLUMN `CHNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '채팅일련번호';

-- 낙찰품결제
CREATE TABLE `PAYMT` (
  `HSNO`  INTEGER      NOT NULL COMMENT '입찰기록일련번호', -- 입찰기록일련번호
  `PAY`   INTEGER      NOT NULL COMMENT '결제방법', -- 결제방법
  `RECV`  VARCHAR(10)  NOT NULL COMMENT '받으시는분', -- 받으시는분
  `DELIV` VARCHAR(255) NOT NULL COMMENT '배송지', -- 배송지
  `CONT`  TEXT         NULL     COMMENT '배송시요구사항' -- 배송시요구사항
)
COMMENT '낙찰품결제';

-- 낙찰품결제
ALTER TABLE `PAYMT`
  ADD CONSTRAINT `PK_PAYMT` -- 낙찰품결제 기본키
    PRIMARY KEY (
      `HSNO` -- 입찰기록일련번호
    );

-- 상품사진
ALTER TABLE `PHOT`
  ADD CONSTRAINT `FK_ITEM_TO_PHOT` -- 상품 -> 상품사진
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `FK_MEMB_TO_INTER` -- 회원 -> 나의관심
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `FK_ITEM_TO_INTER` -- 상품 -> 나의관심
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `FK_MEMB_TO_BDHS` -- 회원 -> 입찰기록
    FOREIGN KEY (
      `MNO` -- 입찰자
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `FK_ITEM_TO_BDHS` -- 상품 -> 입찰기록
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 상품
ALTER TABLE `ITEM`
  ADD CONSTRAINT `FK_MEMB_TO_ITEM` -- 회원 -> 상품
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `FK_MEMB_TO_CHAT` -- 회원 -> 채팅
    FOREIGN KEY (
      `SMNO` -- 판매자회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `FK_MEMB_TO_CHAT2` -- 회원 -> 채팅2
    FOREIGN KEY (
      `BMNO` -- 보내는회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 낙찰품결제
ALTER TABLE `PAYMT`
  ADD CONSTRAINT `FK_BDHS_TO_PAYMT` -- 입찰기록 -> 낙찰품결제
    FOREIGN KEY (
      `HSNO` -- 입찰기록일련번호
    )
    REFERENCES `BDHS` ( -- 입찰기록
      `HSNO` -- 입찰기록일련번호
    );
    
-- 회원 데이터
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(1,'user01@test.com',password('1111'),'학생1','010-1111-1111','user.png','123-234','서울시 강남구 역삼동','123-1','111-111',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(2,'user02@test.com',password('1111'),'학생2','010-1112-1112','user.png','123-234','서울시 강남구 역삼동','123-1','111-112',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(3,'user03@test.com',password('1111'),'학생3','010-1113-1113','user.png','123-234','서울시 강남구 역삼동','123-1','111-113',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(4,'user04@test.com',password('1111'),'학생4','010-1114-1114','user.png','123-234','서울시 강남구 역삼동','123-1','111-114',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(5,'user05@test.com',password('1111'),'학생5','010-1115-1115','user.png','123-234','서울시 강남구 역삼동','123-1','111-115',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(6,'user06@test.com',password('1111'),'학생6','010-1116-1116','user.png','123-234','서울시 강남구 역삼동','123-1','111-116',null,null,null);

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(1,1,'시티즌 시계','패션','2016-01-01',30,'택배','시티즌 시계 입니다. 정품, 새제품이고 택, 내부구성품, 박스 그대로 입니다',now(),70000);

insert into phot(pno,itno,path) values(1,1,'1488953845219_0');
insert into phot(pno,itno,path) values(2,1,'1488953845219_1');
insert into phot(pno,itno,path) values(3,1,'1488953845219_2');
insert into phot(pno,itno,path) values(4,1,'1488953845219_3');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(2,2,'HP파빌리온G7','디지털','2016-02-21',100,'택배','HP 파빌리온G7

CPU : AMD A6 4400 2.7Ghz
RAM : 6GB DDR3 RAM
HDD : 320GB SATA
VGA : 라데온HD7520G

화면 : 17인치 LED 대화면  
유.무선 인터넷 사용가능
HDMI 블루투스 웹캠

본제품 HP 파빌리온G7 노트북입니다. 대화면노트북으로 제품상태 깨끗하며 사무작업 인터넷쇼핑 영화감상등 기본적인사용과 고사양 게임들도 원활합니다. 배터리 완충시 평균3시간 내외 사용가능합니다. 사용하실프로그램 권장사양비교후 신중한 입찰 부탁드립니다. 낙찰가에 보내드리며 착불3000원입니다. 좋은거래 부탁드립니다. 감사합니다.
구성품 노트북 + 아답터' ,now() + interval 30 minute,100000);

insert into phot(pno,itno,path) values(5,2,'1487897579286_28');
insert into phot(pno,itno,path) values(6,2,'1487897579287_29');
insert into phot(pno,itno,path) values(7,2,'1487897579287_30');
insert into phot(pno,itno,path) values(8,2,'1487897579288_31');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(3,3,'샤넬 토드백 겸 숄더','패션','2016-12-01',30,'택배','샤넬(CHANEL) 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY

소재: 겉감 - 천연 소가죽 100%, 안감 - 레이욘 100%
SIZE :(측정하는 사람이나 방향에 따라 차이가 날 수 있음.)
가 로( L 넓이 ) - 36~39cm
세 로( W 폭 ) - 15cm
높 이( H ) - 24cm
끈 길이(가방 상부 끝에서 끈 꼭지점 까지) - 22cm
숄더 스트랩 길이 - 60cm
색 상 : 사진색과 같음(모니터에 따라 약간의 차이가 있음)
원산지 : FRANCE
제조사 : CHANEL INC.

설명이 더이상 필요없는 명품 가방의 대명사 샤넬 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY백 입니다~
엄선한 프랑스산 송아지 가죽을 샤넬만의 특유의 기술로 정밀가공하여 숙련된 프랑스 장인들의 꼼꼼한 솜씨로 한땀 한땀 정성을 다해 제작한 명품 샤넬 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY백 입니다~
카프스킨가방의 최고봉으로 편리함과 럭셔리함을 더한 샤넬 명품중의 명품 샤넬 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY백 입니다.', now() + interval 60 minute, 300000);

insert into phot(pno,itno,path) values(9,3,'1487898025542_32');
insert into phot(pno,itno,path) values(10,3,'1487898025543_33');
insert into phot(pno,itno,path) values(11,3,'1487898025543_34');
insert into phot(pno,itno,path) values(12,3,'1487898025544_35');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(4,4,'캐논 정품 EOS-700D','디지털','2016-03-21',15,'택배','본제품은 캐논 정품이며 무상A/S가능한제품입니다.
액정회전식으로 셀프카메라촬영이가능하며 동영상촬영이가능합니다.
낙찰시 아래에명시한 기본구성품이발송되며 즉시구매시 10만원상당의 32GB풀패키지구성으로 발송해드리는 행사를진행하고있습니다.
DSLR 카메라세트의경우 본체 바디보다 렌즈에따라 가격이 천차만별입니다.
풀 HD동영상촬영 DSLR의경우 메모리의 용량에따라 동영상촬영시간이달라집니다.
1시간이상의 넉넉한동영상촬영과 사진촬영을위해서는 32GB메모리를권장합니다.
DSLR카메라는 필수부수기재가있습니다.
구성품을 잘비교하여 구입하시는것이 DSLR카메라구입요령입니다.
동급최강의 기능과 화소수 선명한색감 편리한조작법으로 초보분들도 손쉽게 멋진촬영을하실수있는 현재 최고의인기카메라이며 캐논의 최신형 DSLR카메라입니다.
두드러지는그능으로는 전기능 액정터치조작 / 자동초점 풀HD 동영상촬영 / 라이브뷰지원 / 360도 회전가능한 3인치 LCD액정 / 1800만화소수 / ISO12800지원 / 초당 5매의 초고속연사촬영등..현존 DSLR최강의 스펙을 자랑합니다.
특히 전기능 액정터치조작은 캐논의 독자적인 최신기능입니다.
DSLR카메라는 렌즈가생명입니다.
일반적으로 DSLR구입시 기본렌즈 18-55mm가제공됩니다.
하지만 고배율줌과 접사를위해서는 망원렌즈와 접사용렌즈를 추가로구입하여 렌즈2개 또는 3개구성이됩니다.
렌즈가 여러개면 더비싸보이고 좋을것같지만 결코잘못된생각입니다.
DSLR을 시작하시면서 렌즈2개~3개구성은 버거운구성입니다.특히 여행또는 출사시에 렌즈여러개가지고다니시면서 상황에따라번갈아장착한다는게 실제로는 정말 귀찮고 무겁고 힘든일입니다.
탐론 18-200mm렌즈는 이러한 불편을한번에해결해주는 접사~망원까지가능한 울트라통합접사망원줌렌즈입니다.
쉽게설명드리자면 탐론18-200mm = 접사용렌즈(100mm)+기본렌즈(18-55mm)+망원렌즈(55-200mm)입니다.
렌즈하나로 렌즈3개의성능을발휘하며 화질또한 최고의결과물을 선사해주며 가격면에서도 경제적인렌즈입니다.
기본구성품(일반낙찰시제공)
1.캐논 700D 바디 2.탐론 18-200mm 렌즈(후드제외) 3.배터리 4.충전기 5.스트랩(어깨끈) 6.바디캡 7.렌즈보호캡 8.USB연결잭 9.외부영상연결잭 10.캐논카달로그 11.정품보증서 12.사용설명서 13.소프트웨어CD 14.4GB메모리',now() + interval 90 minute,300000);

insert into phot(pno,itno,path) values(13,4,'1487898434996_36');
insert into phot(pno,itno,path) values(14,4,'1487898434996_37');
insert into phot(pno,itno,path) values(15,4,'1487898434996_38');
insert into phot(pno,itno,path) values(16,4,'1487898434997_39');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(5,5,'닥터데스크 높낮이 조절 책상','가구','2016-02-01',30,'택배','안녕하세요.
닥터데스크 일반형 판매합니다.
"일.반.형" 입니다.

7개월 동안 사용했고 밑에 지지하는 고무가 잘 떨어져 글루건으로 보강해놓았습니다.
사용법은 닥터데스크 홈페이지의 http://doctordesk.co.kr/board/free/read.html?no=23&board_no=1에 나와 있습니다.',now() + interval 120 minute, 30000);

insert into phot(pno,itno,path) values(17,5,'1487898661109_40');
insert into phot(pno,itno,path) values(18,5,'1487898661110_41');
insert into phot(pno,itno,path) values(19,5,'1487898661110_42');
insert into phot(pno,itno,path) values(20,5,'1487898661111_43');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(6,2,'헥스 통기타 HONEY G240C','취미','2016-01-01',30,'택배 또는 직거래','두달전에 구입한 헥스 통기타 입니다.
튜너기,줄감개,기타 스트랩,피크2개,피크케이스,가방,통기타책3권을
같이 드립니다.전체적으로 깨끗한 상태이고 줄교체과정에서 브릿지핀에 약간의 기스가있습니다.
직거래는 경기도 지역에서 가능합니다.',now() + interval 150 minute,20000);

insert into phot(pno,itno,path) values(21,6,'1487898952886_44');
insert into phot(pno,itno,path) values(22,6,'1487898952886_45');
insert into phot(pno,itno,path) values(23,6,'1487898952887_46');
insert into phot(pno,itno,path) values(24,6,'1487898952887_47');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(7,5,'엘파마 MTB','레져','2016-01-01',30,'직거래','구매 7개월 된 MTB자전거 팝니다,
실사용은 3회이며 총 60km 정도 주행 했으며 사진처럼 새거대비 95%이상되는 제품입니다.
꼭 구매할분만 입찰해주시고 태클및 장난입찰은 정중히 사양합니다
되도록이면 부산 인근에서 사시는분들과 직 거래를 우선합니다.',now() + interval 180 minute,450000);

insert into phot(pno,itno,path) values(25,7,'1487912711572_0');
insert into phot(pno,itno,path) values(26,7,'1487912711573_1');
insert into phot(pno,itno,path) values(27,7,'1487912711573_2');
insert into phot(pno,itno,path) values(28,7,'1487912711574_3');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(8,3,'JBL 북쉘프 스피커','디지털','2016-01-01',30,'택배 또는 직거래','
JBL 노스리지 북쉘프 스피커 팝니다
돔트위터와  5인치 우퍼 조합이고
8옴입니다
사이즈는 
가로16.5 세로24 폭15 입니다
전체 적으로 상태 좋습니다.
중고 특성상 반품 불가입니다',now() + interval 210 minute,30000);

insert into phot(pno,itno,path) values(29,8,'1487912907326_4');
insert into phot(pno,itno,path) values(30,8,'1487912907326_5');
insert into phot(pno,itno,path) values(31,8,'1487912907327_6');
insert into phot(pno,itno,path) values(32,8,'1487912907327_7');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(9,5,'삼성 SSD 840 250GB','디지털','2016-01-01',30,'택배','
삼성 840 SSD 입니다.
250GB구요 본체 OS 백업용으로 들고 있어 사용시간 짧아요
필요하신분 입찰부탁드려요~',now() + interval 240 minute,30000);

insert into phot(pno,itno,path) values(33,9,'1487913225052_8');
insert into phot(pno,itno,path) values(34,9,'1487913225052_9');
insert into phot(pno,itno,path) values(35,9,'1487913225053_10');
insert into phot(pno,itno,path) values(36,9,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(10,'1487913225052_8');
insert into phot(itno,path) values(10,'1487913225052_9');
insert into phot(itno,path) values(10,'1487913225053_10');
insert into phot(itno,path) values(10,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(11,'1487913225052_8');
insert into phot(itno,path) values(11,'1487913225052_9');
insert into phot(itno,path) values(11,'1487913225053_10');
insert into phot(itno,path) values(11,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(12,'1487913225052_8');
insert into phot(itno,path) values(12,'1487913225052_9');
insert into phot(itno,path) values(12,'1487913225053_10');
insert into phot(itno,path) values(12,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(13,'1487913225052_8');
insert into phot(itno,path) values(13,'1487913225052_9');
insert into phot(itno,path) values(13,'1487913225053_10');
insert into phot(itno,path) values(13,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(14,'1487913225052_8');
insert into phot(itno,path) values(14,'1487913225052_9');
insert into phot(itno,path) values(14,'1487913225053_10');
insert into phot(itno,path) values(14,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(15,'1487913225052_8');
insert into phot(itno,path) values(15,'1487913225052_9');
insert into phot(itno,path) values(15,'1487913225053_10');
insert into phot(itno,path) values(15,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(16,'1487913225052_8');
insert into phot(itno,path) values(16,'1487913225052_9');
insert into phot(itno,path) values(16,'1487913225053_10');
insert into phot(itno,path) values(16,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(17,'1487913225052_8');
insert into phot(itno,path) values(17,'1487913225052_9');
insert into phot(itno,path) values(17,'1487913225053_10');
insert into phot(itno,path) values(17,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(18,'1487913225052_8');
insert into phot(itno,path) values(18,'1487913225052_9');
insert into phot(itno,path) values(18,'1487913225053_10');
insert into phot(itno,path) values(18,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(19,'1487913225052_8');
insert into phot(itno,path) values(19,'1487913225052_9');
insert into phot(itno,path) values(19,'1487913225053_10');
insert into phot(itno,path) values(19,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(20,'1487913225052_8');
insert into phot(itno,path) values(20,'1487913225052_9');
insert into phot(itno,path) values(20,'1487913225053_10');
insert into phot(itno,path) values(20,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(21,'1487913225052_8');
insert into phot(itno,path) values(21,'1487913225052_9');
insert into phot(itno,path) values(21,'1487913225053_10');
insert into phot(itno,path) values(21,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(22,'1487913225052_8');
insert into phot(itno,path) values(22,'1487913225052_9');
insert into phot(itno,path) values(22,'1487913225053_10');
insert into phot(itno,path) values(22,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(23,'1487913225052_8');
insert into phot(itno,path) values(23,'1487913225052_9');
insert into phot(itno,path) values(23,'1487913225053_10');
insert into phot(itno,path) values(23,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(24,'1487913225052_8');
insert into phot(itno,path) values(24,'1487913225052_9');
insert into phot(itno,path) values(24,'1487913225053_10');
insert into phot(itno,path) values(24,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(25,'1487913225052_8');
insert into phot(itno,path) values(25,'1487913225052_9');
insert into phot(itno,path) values(25,'1487913225053_10');
insert into phot(itno,path) values(25,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(26,'1487913225052_8');
insert into phot(itno,path) values(26,'1487913225052_9');
insert into phot(itno,path) values(26,'1487913225053_10');
insert into phot(itno,path) values(26,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(27,'1487913225052_8');
insert into phot(itno,path) values(27,'1487913225052_9');
insert into phot(itno,path) values(27,'1487913225053_10');
insert into phot(itno,path) values(27,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(28,'1487913225052_8');
insert into phot(itno,path) values(28,'1487913225052_9');
insert into phot(itno,path) values(28,'1487913225053_10');
insert into phot(itno,path) values(28,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(29,'1487913225052_8');
insert into phot(itno,path) values(29,'1487913225052_9');
insert into phot(itno,path) values(29,'1487913225053_10');
insert into phot(itno,path) values(29,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(30,'1487913225052_8');
insert into phot(itno,path) values(30,'1487913225052_9');
insert into phot(itno,path) values(30,'1487913225053_10');
insert into phot(itno,path) values(30,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(31,'1487913225052_8');
insert into phot(itno,path) values(31,'1487913225052_9');
insert into phot(itno,path) values(31,'1487913225053_10');
insert into phot(itno,path) values(31,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(32,'1487913225052_8');
insert into phot(itno,path) values(32,'1487913225052_9');
insert into phot(itno,path) values(32,'1487913225053_10');
insert into phot(itno,path) values(32,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(33,'1487913225052_8');
insert into phot(itno,path) values(33,'1487913225052_9');
insert into phot(itno,path) values(33,'1487913225053_10');
insert into phot(itno,path) values(33,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(34,'1487913225052_8');
insert into phot(itno,path) values(34,'1487913225052_9');
insert into phot(itno,path) values(34,'1487913225053_10');
insert into phot(itno,path) values(34,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(35,'1487913225052_8');
insert into phot(itno,path) values(35,'1487913225052_9');
insert into phot(itno,path) values(35,'1487913225053_10');
insert into phot(itno,path) values(35,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(36,'1487913225052_8');
insert into phot(itno,path) values(36,'1487913225052_9');
insert into phot(itno,path) values(36,'1487913225053_10');
insert into phot(itno,path) values(36,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(37,'1487913225052_8');
insert into phot(itno,path) values(37,'1487913225052_9');
insert into phot(itno,path) values(37,'1487913225053_10');
insert into phot(itno,path) values(37,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(38,'1487913225052_8');
insert into phot(itno,path) values(38,'1487913225052_9');
insert into phot(itno,path) values(38,'1487913225053_10');
insert into phot(itno,path) values(38,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(39,'1487913225052_8');
insert into phot(itno,path) values(39,'1487913225052_9');
insert into phot(itno,path) values(39,'1487913225053_10');
insert into phot(itno,path) values(39,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(40,'1487913225052_8');
insert into phot(itno,path) values(40,'1487913225052_9');
insert into phot(itno,path) values(40,'1487913225053_10');
insert into phot(itno,path) values(40,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(41,'1487913225052_8');
insert into phot(itno,path) values(41,'1487913225052_9');
insert into phot(itno,path) values(41,'1487913225053_10');
insert into phot(itno,path) values(41,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(42,'1487913225052_8');
insert into phot(itno,path) values(42,'1487913225052_9');
insert into phot(itno,path) values(42,'1487913225053_10');
insert into phot(itno,path) values(42,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(43,'1487913225052_8');
insert into phot(itno,path) values(43,'1487913225052_9');
insert into phot(itno,path) values(43,'1487913225053_10');
insert into phot(itno,path) values(43,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(44,'1487913225052_8');
insert into phot(itno,path) values(44,'1487913225052_9');
insert into phot(itno,path) values(44,'1487913225053_10');
insert into phot(itno,path) values(44,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(45,'1487913225052_8');
insert into phot(itno,path) values(45,'1487913225052_9');
insert into phot(itno,path) values(45,'1487913225053_10');
insert into phot(itno,path) values(45,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(46,'1487913225052_8');
insert into phot(itno,path) values(46,'1487913225052_9');
insert into phot(itno,path) values(46,'1487913225053_10');
insert into phot(itno,path) values(46,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(47,'1487913225052_8');
insert into phot(itno,path) values(47,'1487913225052_9');
insert into phot(itno,path) values(47,'1487913225053_10');
insert into phot(itno,path) values(47,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(48,'1487913225052_8');
insert into phot(itno,path) values(48,'1487913225052_9');
insert into phot(itno,path) values(48,'1487913225053_10');
insert into phot(itno,path) values(48,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(49,'1487913225052_8');
insert into phot(itno,path) values(49,'1487913225052_9');
insert into phot(itno,path) values(49,'1487913225053_10');
insert into phot(itno,path) values(49,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(50,'1487913225052_8');
insert into phot(itno,path) values(50,'1487913225052_9');
insert into phot(itno,path) values(50,'1487913225053_10');
insert into phot(itno,path) values(50,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(51,'1487913225052_8');
insert into phot(itno,path) values(51,'1487913225052_9');
insert into phot(itno,path) values(51,'1487913225053_10');
insert into phot(itno,path) values(51,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(52,'1487913225052_8');
insert into phot(itno,path) values(52,'1487913225052_9');
insert into phot(itno,path) values(52,'1487913225053_10');
insert into phot(itno,path) values(52,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(53,'1487913225052_8');
insert into phot(itno,path) values(53,'1487913225052_9');
insert into phot(itno,path) values(53,'1487913225053_10');
insert into phot(itno,path) values(53,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(54,'1487913225052_8');
insert into phot(itno,path) values(54,'1487913225052_9');
insert into phot(itno,path) values(54,'1487913225053_10');
insert into phot(itno,path) values(54,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(55,'1487913225052_8');
insert into phot(itno,path) values(55,'1487913225052_9');
insert into phot(itno,path) values(55,'1487913225053_10');
insert into phot(itno,path) values(55,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(56,'1487913225052_8');
insert into phot(itno,path) values(56,'1487913225052_9');
insert into phot(itno,path) values(56,'1487913225053_10');
insert into phot(itno,path) values(56,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(57,'1487913225052_8');
insert into phot(itno,path) values(57,'1487913225052_9');
insert into phot(itno,path) values(57,'1487913225053_10');
insert into phot(itno,path) values(57,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(58,'1487913225052_8');
insert into phot(itno,path) values(58,'1487913225052_9');
insert into phot(itno,path) values(58,'1487913225053_10');
insert into phot(itno,path) values(58,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(59,'1487913225052_8');
insert into phot(itno,path) values(59,'1487913225052_9');
insert into phot(itno,path) values(59,'1487913225053_10');
insert into phot(itno,path) values(59,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(60,'1487913225052_8');
insert into phot(itno,path) values(60,'1487913225052_9');
insert into phot(itno,path) values(60,'1487913225053_10');
insert into phot(itno,path) values(60,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(61,'1487913225052_8');
insert into phot(itno,path) values(61,'1487913225052_9');
insert into phot(itno,path) values(61,'1487913225053_10');
insert into phot(itno,path) values(61,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(62,'1487913225052_8');
insert into phot(itno,path) values(62,'1487913225052_9');
insert into phot(itno,path) values(62,'1487913225053_10');
insert into phot(itno,path) values(62,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(63,'1487913225052_8');
insert into phot(itno,path) values(63,'1487913225052_9');
insert into phot(itno,path) values(63,'1487913225053_10');
insert into phot(itno,path) values(63,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(64,'1487913225052_8');
insert into phot(itno,path) values(64,'1487913225052_9');
insert into phot(itno,path) values(64,'1487913225053_10');
insert into phot(itno,path) values(64,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(65,'1487913225052_8');
insert into phot(itno,path) values(65,'1487913225052_9');
insert into phot(itno,path) values(65,'1487913225053_10');
insert into phot(itno,path) values(65,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(66,'1487913225052_8');
insert into phot(itno,path) values(66,'1487913225052_9');
insert into phot(itno,path) values(66,'1487913225053_10');
insert into phot(itno,path) values(66,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(67,'1487913225052_8');
insert into phot(itno,path) values(67,'1487913225052_9');
insert into phot(itno,path) values(67,'1487913225053_10');
insert into phot(itno,path) values(67,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(68,'1487913225052_8');
insert into phot(itno,path) values(68,'1487913225052_9');
insert into phot(itno,path) values(68,'1487913225053_10');
insert into phot(itno,path) values(68,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(69,'1487913225052_8');
insert into phot(itno,path) values(69,'1487913225052_9');
insert into phot(itno,path) values(69,'1487913225053_10');
insert into phot(itno,path) values(69,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(70,'1487913225052_8');
insert into phot(itno,path) values(70,'1487913225052_9');
insert into phot(itno,path) values(70,'1487913225053_10');
insert into phot(itno,path) values(70,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(71,'1487913225052_8');
insert into phot(itno,path) values(71,'1487913225052_9');
insert into phot(itno,path) values(71,'1487913225053_10');
insert into phot(itno,path) values(71,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(72,'1487913225052_8');
insert into phot(itno,path) values(72,'1487913225052_9');
insert into phot(itno,path) values(72,'1487913225053_10');
insert into phot(itno,path) values(72,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(73,'1487913225052_8');
insert into phot(itno,path) values(73,'1487913225052_9');
insert into phot(itno,path) values(73,'1487913225053_10');
insert into phot(itno,path) values(73,'1487913225053_11');

insert into item(mno,titl,categ,buy,day,deal,cont,stpc,time)
select 1,1,'패션','2017-02-21','312','택배','상세설명',100000,time + interval 30 minute
from item
order by time desc
limit 1;

insert into phot(itno,path) values(74,'1487913225052_8');
insert into phot(itno,path) values(74,'1487913225052_9');
insert into phot(itno,path) values(74,'1487913225053_10');
insert into phot(itno,path) values(74,'1487913225053_11');


