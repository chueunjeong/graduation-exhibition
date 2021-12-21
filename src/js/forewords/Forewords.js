import React from "react";

import CommonHeader from "../components/CommonHeader";

import CommonFooter from "../components/CommonFooter";

import "../../assets/sass/forewords.scss";

const Forewords = () => {
  return (
    <div className="container">
      <CommonHeader />
      <div className="container hidden-m">
        <div className="row forewords-body mt-5 forewords-contents">
          <div className="text-left mt-3 forewords-title-sub font1">Beta Forewords</div>
          <div className="col-md-2 col-sm-12 col-xs-12">
            <div className="row title-relative">
              <div className="col-12 text-left forewords-title" tabindex="0">
                서문
              </div>
              <div className="col-12 text-left forewords-title-eng" tabindex="0">
                Forwords
              </div>

              <div className="char-float char-b">B</div>
              <div className="char-float char-q">?</div>
              <div className="ellipse-float ef-top1"></div>
              <div className="ellipse-float ef-top2"></div>
              <div className="ellipse-float ef-top3"></div>
              <div className="ellipse-float ef-top4"></div>
            </div>
          </div>
          <div className="col-md-10 col-sm-12 col-xs-12 paper-top paper-wrap">
            <div className="paper-text">
              <p tabindex="0">베타테스트를 위한 안녕</p>
              <p tabindex="0">
                한국예술종합학교 미술원 조형예술과의 제22회 졸업전시 &lt;안녕을 위한 베타 테스트&gt;는 총 49명의 예비
                작가들이 선보이는 회화, 설치, 영상, 퍼포먼스 등 다양한 매체의 작업으로 펼쳐집니다. 여느 때와 마찬가지로
                졸업 예정자는 이 전시와 함께 지난 4년간 자신의 예술사 학위 과정을 모두 마무리하게 됩니다. 그런 의미에서
                세상의 모든 졸업전시는 그 자체로 모두에게 특별하지만, 수많은 졸업전시 속에서도 올해 조 형예술과의
                졸업전시는 매우 특별해 보입니다. 단지 전시의 완성도를 충분히 갖추었거나 혹은 전시에 참 여하는 각자의
                예술적 성과가 그 어느 해보다 두드러졌기 때문만은 아닐 것입니다. 그보다 이번 졸업전시는 팬데믹과 함께한
                우리의 불안정한 삶 속에서 언제나 서로의 안위를 물으며 우리를 ‘환대의 세계’로 초대하고 이를 실천한 그 첫
                번째 졸업전이기 때문입니다.
              </p>
              <p tabindex="0">
                이번 전시는 ‘코로나19’가 우리의 삶과 일상에 불안과 혼란을 야기하며 모두가 힘겨워했던 시기에 준비되
                었습니다. 하지만 우리는 이같은 팬데믹 상황을 단지 삶과 일상의 위협만이 아닌 사회에 내재한 다양한 갈등과
                모순이 특정한 계기를 통해 가시화한 세계로 바라봅니다. 그래서 &lt;안녕을 위한 베타 테스트&gt;는 하나의
                전시를 넘어, 팬데믹 상황속에서 마치 전염병처럼 퍼져버린 불안과 혼란의 정서에 쉽게 매몰되지 않고 다양한
                미적 실천들로 탈주하고자 하는 마음을 담고 있습니다. 우리는 끊임없이 ‘안녕’이라는 말로 서로의 안부를 묻고
                전하지만, 모순과 갈등이 위기로 전회한 세계와의 작별을 위한 ‘안녕’을 고하고 있기 때문입니다. 이제 매일의
                불안을 경험하는 위기의 일상에서 ‘안녕’이 갖는 진정한 의미는 언제나 세상의 시작과 끝의 모습으로, 타인과의
                갈등이자 이해의 관계로, 삶의 모순이자 동시에 양립 가능한 세계를 마주 하게 됩니다.
              </p>
              <p tabindex="0">
                지금 우리가 경험하는 불안과 위기의 상황을 견뎌내며 ‘안녕의 감각’과 ‘이타적 사유’를 통해 환대의 시공간을
                펼쳐낸 예술가로서의 첫 출발을 진심으로 응원합니다. 미술원 조형예술과의 예술교육이 하나의 이상적인 미술을
                향해 있는 것이 아니라, 복수의 이질적인 미술을 발현시키는 것에 있다면, 지금 여러분들 이 보여주는 미증유의
                전시 서사는 우리의 예술/교육적 실천의 가치를 다시 한번 떠올리게 합니다. 지금 여기,졸업생들이 보여주는
                미적 사유와 실천은 이제 그 어떠한 것으로도 환원되지 않는 당신들만의 고유 함으로 모두에게 기억될
                것입니다. 앞으로도 우리는 그러한 미적 실험과 도전을 지속하려는 베타테스터 들의 안위를 묻게 될 것이지만,
                오늘 이 자리를 빌어 여러분들에게 진심어린 작별의 인사를 건네고자 합니다. 그것이 예술대학에서의 진정한
                졸업을 의미한다면, 더할 나위 없이 좋은 당신을 위한 ‘안녕’이 될 것 입니다.
              </p>
              <p tabindex="0">김연용 | 미술원 조형예술과 교수</p>
            </div>
          </div>
          <div className="col-10 paper-bottom paper-bottom-loc paper-wrap">
            <div className="paper-text">
              <p tabindex="0">모든 것이 변하겠지만, 애써 준비하고, 우리는 그것을 즐길 것이다.</p>
              <p tabindex="0">
                사람들은 실패에 대해 말할 때 종종 초연해지는데, 나는 그 특유의 쿨함을 좋아한다. 약간의 시니컬한 어조
                뒤에 따라오는 대범함과 여유는 희극과 비극의 경계를 오가다 결국 희극의 어느 지점에 나를 떨궈 놓는다. 그
                쿨함의 근원을 나름 추측해 보자면, 체념 후 비로소 얻게 되는 자신감, 혹은 스스로 불완전한 존재임을
                인정하는 것으로 부터 나오는 게 아닐까 생각한다. 글을 쓰면서 올해 졸업 심사를 본 학생들의 얼굴과 작품들이
                하나 둘 떠오른다. 벽에 정렬로 걸린 그림들부터 콤부차 효모균 작업과 유 에프오 조명 아래
                디제잉까지...학생들은 작업에서 모자람과 틈이 드러나지 않기를 바라면서도 자신이 경험한 실패와 한계에 대해
                담담하게 말했다. 그 어떤 내용보다 정확했고 미화는 없었다. 이제 그들은 포기 대신 다음을 준비할 수 있는
                여유와 내가 애정하는 특유의 쿨함을 가지고 졸업을 한다.
              </p>

              <p tabindex="0">
                올해 졸업생 일동은 이타적 베타테스트로서 졸업 전시를 기획했다. 얼핏 생각하면 이타적 베타테스트는 졸업
                전시와 이질적으로 느껴진다. 대부분 졸업 전시는 테스트가 아닌 완결에 의미를 둔다. 따라서 다른 것보다 나의
                작업을 가장 잘 드러낼 수 있는 방법을 최우선으로 고민하고, 변수를 줄이기 위해 기존의 안정된 형식을 취하는
                것이 일반적이다. 하지만 조형예술과 학생들은 이번 졸업 전시에 배리어프리 개념을 처음 도입함으로써 그동안
                소외된 전시장의 경험 주체를 확장하고 새로운 행동 방향을 제시한다. 아직 부족할 수 있고 부분적으로만
                작동할 수 있는 불완전한 상황을 예측하면서도 마치 선언이라도 하듯 밀고 나간다. ‘왜 학교는 먼저 제안하지
                못했을까’하는 부끄럼도 있지만, 이러한 결정을 내리고 행하는 학생들의 시도와 추진력에 나 스스로도 매우
                고무 된다. 앞으로 2021년 졸업 전시가 선례가 되어 조형예술과 전시의 뉴노멀이 될 수 있기를 기대한다.
              </p>

              <p className="italic-text pr-3" tabindex="0">
                ...하지만 지상의 만물은 모두 불완전하다. 지금, 더 이상 아름다울 수 없을 정도로 아름다운 저 석양은 아직
                단 한 번도 없었다. 우리를 지금보다 더 부드러운 잠에 빠지게 만드는 산들바람은 아직 한 번도 불어오지
                않았다. 그리하여 우리는, 변함없는 시선으로 산과 석상을 응시 하며 하루하루를 , 책과 함께 즐길 것이다.
                만물을 우리의 본질로 내면화하겠다는 그 생각으로 모든 것을 몽상할 것이다. 그러기 위해서 우리는
                탄생하자마자 낯설어질 묘사와 분석을, 마치 하루의 마지막에 모든 풍경이 낯설게 변하듯이 그렇게 변해버릴
                묘사와 분석을 애써 준비할 것이다. 우리는 그것을 즐길 것이다.
              </p>

              <p className="text-right pr-3" tabindex="0">
                -페르난두 페소아, ‘불안의 서’ 中
              </p>
              <p className="text-right" tabindex="0">
                2021.11.
              </p>
              <p className="text-right" tabindex="0">
                구지윤
              </p>
            </div>
          </div>
          <div className="col-2 paper-bottom-loc">
            <div className="char-float char-a">A</div>
            <div className="char-float char-special">※</div>
            <div className="ellipse-float ef-top5"></div>
            <div className="ellipse-float ef-top6"></div>
            <div className="ellipse-float ef-top7"></div>
            <div className="ellipse-float ef-top8"></div>
          </div>

          <div className="row forewords-body mb-5 thanksto-text">
            <div className="col-6 thanksto-text-loc"></div>
            <div className="col-6 thanksto-text-loc">
              <div className="row">
                <div className="col-12 my-5 font1 credits">Credits and thanks to</div>
                <div className="col-3 " tabindex="0">
                  참여 학생
                </div>
                <div className="col-9 " tabindex="0">
                  강정현,곽효진,김민지,김선,김소현,김수민,김채린,김환희,노예주,류효정,목준수,박민영,박슬,박영민,박정민,박하린,배민진,손민지,신민경,오승은,오어진,왕호연,유지원,윤시오(윤민지),윤지아,이도현,이슬이,이승연,이승하,진진(이예진),이초영,이들(이화정),임민영,정민지,정소윤,정태완,조도현,조윤아,조은형,혜영조(조혜영),주다은,최상민,최서윤,최유진,최윤식,최희수,하주연,허겸
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-3 " tabindex="0">
                  지도 교수
                </div>
                <div className="col-9 " tabindex="0">
                  김연용
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-3 " tabindex="0">
                  웹 디자인
                </div>
                <div className="col-9 " tabindex="0">
                  배민진, 최윤식, 최희수
                  <br />
                  바우어버드
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-3 " tabindex="0">
                  웹 개발
                </div>
                <div className="col-9 " tabindex="0">
                  바우어버드
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container hidden-pc">
        <div className="row forewords-body mt-5 ">
          <div className="row title-relative">
            <div className="col-12 text-left forewords-title" tabindex="0">
              서문
            </div>
            <div className="col-12 text-left forewords-title-eng" tabindex="0">
              Forwords
            </div>
          </div>
          <div className="text-left mt-3 forewords-title-sub font1" tabindex="0">
            Beta Forewords
          </div>

          <div className="">
            <div className="paper-top-m">
              <p tabindex="0">베타테스트를 위한 안녕</p>
              <p tabindex="0">
                한국예술종합학교 미술원 조형예술과의 제22회 졸업전시 &lt;안녕을 위한 베타 테스트&gt;는 총 49명의 예비
                작가들이 선보이는 회화, 설치, 영상, 퍼포먼스 등 다양한 매체의 작업으로 펼쳐집니다. 여느 때와 마찬가지로
                졸업 예정자는 이 전시와 함께 지난 4년간 자신의 예술사 학위 과정을 모두 마무리하게 됩니다. 그런 의미에서
                세상의 모든 졸업전시는 그 자체로 모두에게 특별하지만, 수많은 졸업전시 속에서도 올해 조 형예술과의
                졸업전시는 매우 특별해 보입니다. 단지 전시의 완성도를 충분히 갖추었거나 혹은 전시에 참 여하는 각자의
                예술적 성과가 그 어느 해보다 두드러졌기 때문만은 아닐 것입니다. 그보다 이번 졸업전시는 팬데믹과 함께한
                우리의 불안정한 삶 속에서 언제나 서로의 안위를 물으며 우리를 ‘환대의 세계’로 초대하고 이를 실천한 그 첫
                번째 졸업전이기 때문입니다.
              </p>
              <p tabindex="0">
                이번 전시는 ‘코로나19’가 우리의 삶과 일상에 불안과 혼란을 야기하며 모두가 힘겨워했던 시기에 준비되
                었습니다. 하지만 우리는 이같은 팬데믹 상황을 단지 삶과 일상의 위협만이 아닌 사회에 내재한 다양한 갈등과
                모순이 특정한 계기를 통해 가시화한 세계로 바라봅니다. 그래서 &lt;안녕을 위한 베타 테스트&gt;는 하나의
                전시를 넘어, 팬데믹 상황속에서 마치 전염병처럼 퍼져버린 불안과 혼란의 정서에 쉽게 매몰되지 않고 다양한
                미적 실천들로 탈주하고자 하는 마음을 담고 있습니다. 우리는 끊임없이 ‘안녕’이라는 말로 서로의 안부를 묻고
                전하지만, 모순과 갈등이 위기로 전회한 세계와의 작별을 위한 ‘안녕’을 고하고 있기 때문입니다. 이제 매일의
                불안을 경험하는 위기의 일상에서 ‘안녕’이 갖는 진정한 의미는 언제나 세상의 시작과 끝의 모습으로, 타인과의
                갈등이자 이해의 관계로, 삶의 모순이자 동시에 양립 가능한 세계를 마주 하게 됩니다.
              </p>
              <p tabindex="0">
                지금 우리가 경험하는 불안과 위기의 상황을 견뎌내며 ‘안녕의 감각’과 ‘이타적 사유’를 통해 환대의 시공간을
                펼쳐낸 예술가로서의 첫 출발을 진심으로 응원합니다. 미술원 조형예술과의 예술교육이 하나의 이상적인 미술을
                향해 있는 것이 아니라, 복수의 이질적인 미술을 발현시키는 것에 있다면, 지금 여러분들 이 보여주는 미증유의
                전시 서사는 우리의 예술/교육적 실천의 가치를 다시 한번 떠올리게 합니다. 지금 여기,졸업생들이 보여주는
                미적 사유와 실천은 이제 그 어떠한 것으로도 환원되지 않는 당신들만의 고유 함으로 모두에게 기억될
                것입니다. 앞으로도 우리는 그러한 미적 실험과 도전을 지속하려는 베타테스터 들의 안위를 묻게 될 것이지만,
                오늘 이 자리를 빌어 여러분들에게 진심어린 작별의 인사를 건네고자 합니다. 그것이 예술대학에서의 진정한
                졸업을 의미한다면, 더할 나위 없이 좋은 당신을 위한 ‘안녕’이 될 것 입니다.
              </p>
              <p tabindex="0">김연용 | 미술원 조형예술과 교수</p>
            </div>
          </div>
          <div className="">
            <div className="paper-text mt-5 paper-bottom-m">
              <p tabindex="0">모든 것이 변하겠지만, 애써 준비하고, 우리는 그것을 즐길 것이다.</p>
              <p tabindex="0">
                사람들은 실패에 대해 말할 때 종종 초연해지는데, 나는 그 특유의 쿨함을 좋아한다. 약간의 시니컬한 어조
                뒤에 따라오는 대범함과 여유는 희극과 비극의 경계를 오가다 결국 희극의 어느 지점에 나를 떨궈 놓는다. 그
                쿨함의 근원을 나름 추측해 보자면, 체념 후 비로소 얻게 되는 자신감, 혹은 스스로 불완전한 존재임을
                인정하는 것으로 부터 나오는 게 아닐까 생각한다. 글을 쓰면서 올해 졸업 심사를 본 학생들의 얼굴과 작품들이
                하나 둘 떠오른다. 벽에 정렬로 걸린 그림들부터 콤부차 효모균 작업과 유 에프오 조명 아래
                디제잉까지...학생들은 작업에서 모자람과 틈이 드러나지 않기를 바라면서도 자신이 경험한 실패와 한계에 대해
                담담하게 말했다. 그 어떤 내용보다 정확했고 미화는 없었다. 이제 그들은 포기 대신 다음을 준비할 수 있는
                여유와 내가 애정하는 특유의 쿨함을 가지고 졸업을 한다.
              </p>

              <p tabindex="0">
                올해 졸업생 일동은 이타적 베타테스트로서 졸업 전시를 기획했다. 얼핏 생각하면 이타적 베타테스트는 졸업
                전시와 이질적으로 느껴진다. 대부분 졸업 전시는 테스트가 아닌 완결에 의미를 둔다. 따라서 다른 것보다 나의
                작업을 가장 잘 드러낼 수 있는 방법을 최우선으로 고민하고, 변수를 줄이기 위해 기존의 안정된 형식을 취하는
                것이 일반적이다. 하지만 조형예술과 학생들은 이번 졸업 전시에 배리어프리 개념을 처음 도입함으로써 그동안
                소외된 전시장의 경험 주체를 확장하고 새로운 행동 방향을 제시한다. 아직 부족할 수 있고 부분적으로만
                작동할 수 있는 불완전한 상황을 예측하면서도 마치 선언이라도 하듯 밀고 나간다. ‘왜 학교는 먼저 제안하지
                못했을까’하는 부끄럼도 있지만, 이러한 결정을 내리고 행하는 학생들의 시도와 추진력에 나 스스로도 매우
                고무 된다. 앞으로 2021년 졸업 전시가 선례가 되어 조형예술과 전시의 뉴노멀이 될 수 있기를 기대한다.
              </p>

              <p className="italic-text pr-3" tabindex="0">
                ...하지만 지상의 만물은 모두 불완전하다. 지금, 더 이상 아름다울 수 없을 정도로 아름다운 저 석양은 아직
                단 한 번도 없었다. 우리를 지금보다 더 부드러운 잠에 빠지게 만드는 산들바람은 아직 한 번도 불어오지
                않았다. 그리하여 우리는, 변함없는 시선으로 산과 석상을 응시 하며 하루하루를 , 책과 함께 즐길 것이다.
                만물을 우리의 본질로 내면화하겠다는 그 생각으로 모든 것을 몽상할 것이다. 그러기 위해서 우리는
                탄생하자마자 낯설어질 묘사와 분석을, 마치 하루의 마지막에 모든 풍경이 낯설게 변하듯이 그렇게 변해버릴
                묘사와 분석을 애써 준비할 것이다. 우리는 그것을 즐길 것이다.
              </p>

              <p className="text-right pr-3" tabindex="0">
                -페르난두 페소아, ‘불안의 서’ 中
              </p>
              <p className="text-right" tabindex="0">
                2021.11.
              </p>
              <p className="text-right" tabindex="0">
                구지윤
              </p>
            </div>
          </div>

          <div className="">
            <div className="col-12 my-5 font1 credits" tabindex="0">
              Credits and thanks to
            </div>
            <div className="col-3 " tabindex="0">
              참여 학생
            </div>
            <div className="col-9 " tabindex="0">
              강정현, 곽효진, 김민지, 김선, 김소현, 김수민, 김채린, 김환희, 노예주, 류효정, 목준수, 박민영, 박슬,
              박영민, 박정민, 박하린, 배민진, 손민지, 신민경, 오승은, 오어진, 왕호연, 유지원, 윤민지, 윤지아, 이도현,
              이슬이, 이승연, 이승하, 이예진, 이초영, 이화정, 임민영, 정민지, 정소윤, 정태완, 조도현, 조윤아, 조은형,
              조혜영, 주다은, 최상민, 최서윤, 최유진, 최윤식, 최희수, 하주연, 허겸
            </div>

            <div className="row mt-4">
              <div className="col-3 " tabindex="0">
                지도 교수
              </div>
              <div className="col-9 " tabindex="0">
                김연용
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-3 " tabindex="0">
                웹 디자인
              </div>
              <div className="col-9 " tabindex="0">
                배민진, 최윤식, 최희수
                <br />
                바우어버드
              </div>
            </div>

            <div className="row mt-4 mb-5">
              <div className="col-3 " tabindex="0">
                웹 개발
              </div>
              <div className="col-9 " tabindex="0">
                바우어버드
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default Forewords;
