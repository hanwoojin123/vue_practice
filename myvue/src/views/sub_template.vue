<template>
    <DefaultLayout>
        <!-- tit_area : S -->
        <div class="tit_area">
            <div class="left">
                <h2 class="tit">대타이틀</h2>
            </div>
            <div class="right">
                <ul class="location">
                    <li class="home"><router-link to="#">home</router-link></li>
                    <li><router-link to="#">납품검사</router-link></li>
                    <li><strong>납품검사관리</strong></li>
                </ul>
            </div>
        </div>
        <!-- tit_area : E -->

        <!-- sub_tit_area : S -->
        <div class="sub_tit_area">
            <div class="left">
                <h3 class="tit">중타이틀</h3>
            </div>
            <div class="right"></div>
        </div>
        <!-- sub_tit_area : E -->

        <!-- sub_tit_area : S -->
        <div class="sub_tit_area detail">
            <div class="left">
                <span class="total">Total<em class="total_num">98270</em></span>
            </div>
            <div class="right">
                <div class="flex_wrap">
                    <div class="form_search w216">
                        <input type="text" class="form_control wp100" placeholder="placeholder">  
                        <button class="btn_search" type="button"><i class="ico20 search"></i></button>
                    </div>
                    <div class="btn_search_group">
                        <button type="button" class="lbtn green">엑셀<i class="ico12 download"></i></button>
                        <button type="button" class="btn gray">신청삭제</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- sub_tit_area : E -->

        <!-- tbl_style01 : S -->
        <div class="tbl_style01_wrap">
            <table class="tbl_style01 detail">
                <colgroup>
                    <col style="width: 50px;">
                    <col style="width: 200px;">
                    <col style="width: 150px;">
                    <col>
                    <col>
                    <col style="width: 250px;">
                    <col style="width: 180px;">
                    <col style="width: 200px;">
                </colgroup>
                <thead>
                    <tr>
                        <th>
                            <div class="chk_wrap checkbox">
                                <span class="chk_custom">
                                    <input type="checkbox" name="chkAll" id="chkAll">
                                    <label for="chkAll"></label>
                                </span>
                            </div>
                        </th>
                        <th>신청번호</th>
                        <th>계약번호<button type="button" class="arrow_updown"><i class="ico12 arrow_down"></i></button></th>
                        <th>검사구분 (협력사)<button type="button" class="arrow_updown"><i class="ico12 arrow_up"></i></button></th>
                        <th>주요검사물품명</th>
                        <th>상태 (ERP등록번호)</th>
                        <th>처리담당자</th>
                        <th>신청일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="chk_wrap checkbox">
                                <span class="chk_custom">
                                    <input type="checkbox" name="chk" id="chk_01">
                                    <label for="chk_01"></label>
                                </span>
                            </div>
                        </td>
                        <td>DM202311090001</td>
                        <td>4260157876</td>
                        <td><strong>난품지시 행복나래 주식회사</strong></td>
                        <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                        <td><span class="situation application">신청</span></td>
                        <td><strong>홍정호님</strong></td>
                        <td>2023-11-09</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="chk_wrap checkbox">
                                <span class="chk_custom">
                                    <input type="checkbox" name="chk" id="chk_02">
                                    <label for="chk_02"></label>
                                </span>
                            </div>
                        </td>
                        <td>DM202311090001</td>
                        <td>4260157876</td>
                        <td><strong>난품지시 행복나래 주식회사</strong></td>
                        <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                        <td><span class="situation pass">합격</span></td>
                        <td><strong>홍정호님</strong></td>
                        <td>2023-11-09</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="chk_wrap checkbox">
                                <span class="chk_custom">
                                    <input type="checkbox" name="chk" id="chk_03">
                                    <label for="chk_03"></label>
                                </span>
                            </div>
                        </td>
                        <td>DM202311090001</td>
                        <td>4260157876</td>
                        <td><strong>난품지시 행복나래 주식회사</strong></td>
                        <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                        <td><span class="situation pass">합격</span></td>
                        <td><strong>홍정호님</strong></td>
                        <td>2023-11-09</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="chk_wrap checkbox">
                                <span class="chk_custom">
                                    <input type="checkbox" name="chk" id="chk_04">
                                    <label for="chk_04"></label>
                                </span>
                            </div>
                        </td>
                        <td>DM202311090001</td>
                        <td>4260157876</td>
                        <td><strong>난품지시 행복나래 주식회사</strong></td>
                        <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                        <td><span class="situation pass">합격<em class="pass_num">2023110055</em></span></td>
                        <td><strong>홍정호님</strong></td>
                        <td>2023-11-09</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="chk_wrap checkbox">
                                <span class="chk_custom">
                                    <input type="checkbox" name="chk" id="chk_05">
                                    <label for="chk_05"></label>
                                </span>
                            </div>
                        </td>
                        <td>DM202311090001</td>
                        <td>4260157876</td>
                        <td><strong>난품지시 행복나래 주식회사</strong></td>
                        <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                        <td><span class="situation pass">합격<em class="pass_num">2023110055</em></span></td>
                        <td><strong>홍정호님</strong></td>
                        <td>2023-11-09</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- tbl_style01 : E -->

        <!-- btm_area : S -->
        <div class="btm_area">
            <div class="left"></div>
            <div class="paging_area">
                <button type="button" class="first">first</button>
                <button type="button" class="prev">prev</button>
                <button type="button" class="pag_num active">1</button>
                <button type="button" class="pag_num">2</button>
                <button type="button" class="pag_num">3</button>
                <button type="button" class="pag_num">4</button>
                <button type="button" class="pag_num">5</button>
                <button type="button" class="next">next</button>
                <button type="button" class="last">last</button>
            </div>
            <div class="right"></div>
        </div>
        <!-- btm_area : E -->

        <!-- sub_tit_area : S -->
        <div class="sub_tit_area">
            <div class="left">
                <h3 class="tit">검색테이블</h3>
            </div>
            <div class="right"></div>
        </div>
        <!-- sub_tit_area : E -->

        <!-- search_area : S -->
        <div class="search_area">
            <ul class="search_list_area">
                <li>
                    <dl>
                        <dt><strong class="label">주요검사물품명</strong></dt>
                        <dd>
                            <input type="text" class="form_control wp100" placeholder="Placeholder">
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">플랜트</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">투자구분</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">검사구분</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">검사방법</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">상태구분</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">협력사명</strong></dt>
                        <dd>
                            <input type="text" class="wp100 form_control" placeholder="Placeholder">
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">원천제조사명</strong></dt>
                        <dd>
                            <input type="text" class="wp100 form_control" placeholder="Placeholder">
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">장비군</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">발주팀</strong></dt>
                        <dd>
                            <input type="text" class="wp100 form_control" placeholder="Placeholder">
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">담당자</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">AFE차수</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>Placeholder</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">계약번호</strong></dt>
                        <dd>
                            <input type="text" class="wp100 form_control" placeholder="Placeholder">
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">신청번호</strong></dt>
                        <dd>
                            <input type="text" class="wp100 form_control" placeholder="Placeholder">
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">서비스명</strong></dt>
                        <dd>
                            <input type="text" class="wp100 form_control" placeholder="Placeholder">
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">신청기간</strong></dt>
                        <dd>
                            <div class="flex_wrap date">
                                <div class="datepicker">
                                    <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                                </div>
                                <span>~</span>
                                <div class="datepicker">
                                    <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                                </div>
                            </div>
                        </dd>
                    </dl>
                </li>
            </ul>
            <div class="search_btn_area">
                <button type="button" class="btn"><i class="ico12 search_W"></i>조회</button>
            </div>
        </div>
        <!-- search_area : E -->

        <!-- sub_tit_area : S -->
        <div class="sub_tit_area">
            <div class="left">
                <h3 class="tit">검색테이블</h3>
            </div>
            <div class="right"></div>
        </div>
        <!-- sub_tit_area : E -->

        <!-- tbl_style01 list : S -->
        <table class="tbl_style02 list">
            <colgroup>
                <col style="width: 165px">
                <col>
                <col style="width: 165px">
                <col>
            </colgroup>
            <tbody>
                <tr>
                    <th>텍스트</th>
                    <td>경기도 포천시 군내면 좌의길 8 선우커뮤니케이션</td>
                    <th>기간</th>
                    <td>
                        <div class="flex_wrap date">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <span>~</span>
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>셀렉트</th>
                    <td>
                        <select class="form_control">
                            <option>Select</option>
                            <option>선택1</option>
                            <option>선택2</option>
                            <option>선택3</option>
                        </select>
                    </td>
                    <th>입력+텍스트버튼</th>
                    <td>
                        <div class="flex_wrap">
                            <input type="text" class="form_control" placeholder="Placeholder">
                            <button type="button" class="lbtn gray">button sample</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>체크</th>
                    <td>
                        <div class="chk_wrap checkbox">
                            <span class="chk_custom">
                                <input type="checkbox" name="label" id="label1">
                                <label for="label1">Lable</label>
                            </span>
                            <span class="chk_custom">
                                <input type="checkbox" name="label" id="label2">
                                <label for="label2">Lable2</label>
                            </span>
                            <span class="chk_custom">
                                <input type="checkbox" name="label" id="label3">
                                <label for="label3">Lable3</label>
                            </span>
                        </div>
                    </td>
                    <th>라디오</th>
                    <td>
                        <div class="flex_wrap radio_wrap w245">
                            <span class="radio_custom">
                                <input type="radio" name="radio_btn" id="radio_01">
                                <label for="radio_01">Radio</label>
                            </span>
                            <span class="radio_custom">
                                <input type="radio" name="radio_btn" id="radio_02">
                                <label for="radio_02">Radio2</label>
                            </span>
                            <span class="radio_custom">
                                <input type="radio" name="radio_btn" id="radio_03">
                                <label for="radio_03">Radio3</label>
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>입력</th>
                    <td>
                        <input type="text" class="form_control" placeholder="Placeholder">
                    </td>
                    <th>셀렉트+입력</th>
                    <td>
                        <div class="flex_wrap">
                            <select class="form_control w117">
                                <option>Select</option>
                                <option>선택1</option>
                                <option>선택2</option>
                                <option>선택3</option>
                            </select>
                            <input type="text" class="form_control" placeholder="Placeholder">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th class="textarea">textarea</th>
                    <td colspan="3">
                        <textarea placeholder="텍스트를 입력해주세요." rows="3" class="wp100 form_control" ></textarea>
                        <p class="text_count"><span class="text_count_cur">0</span> <span>/</span> <span class="text_count_total">100</span></p>
                    </td>
                </tr>
                <tr>
                    <th>필수입력항목<em class="input_required">*</em></th>
                    <td>
                        <input type="text" class="form_control" placeholder="Placeholder">
                    </td>
                    <th>input readonly</th>
                    <td>
                        <input type="text" class="form_control" placeholder="Placeholder" readonly>
                    </td>
                </tr>
                <tr>
                    <th>Search</th>
                    <td colspan="3">
                        <div class="form_search w245">
                            <input type="text" class="form_control wp100" placeholder="Placeholder">
                            <button class="btn_search" type="button"><i class="ico20 search"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- tbl_style01 list : E -->

        <!-- button set : S -->
        <div class="btn_set_tit_area">
            <div class="left">
                <h2 class="tit">Button Set(Size)</h2>
                <p class="desc">기본 버튼으로 모든 페이지에 적용이 가능한 버튼셋</p>
            </div>
            <div class="right">
            </div>
        </div>

        <div class="btn_set_wrap btn_set">
            <div class="left">
                <div class="btn_tit_area">
                    <h4 class="btn_tit">small<br><em class="btn_size_num">32</em></h4>
                </div>
                <div class="btn_tit_area">
                    <h4 class="btn_tit">large<br><em class="btn_size_num">40</em></h4>
                </div>
            </div>
            <div class="right">
                <div class="btn_wrap">
                    <div class="btn_basic">
                        <button type="button" class="btn">button sample</button>
                        <button type="button" class="btn" disabled>button sample</button>
                    </div>
                    <div class="btn_plus">
                        <button type="button" class="btn"><i class="ico12 plus"></i>button sample</button>
                        <button type="button" class="btn red"><i class="ico12 plus"></i>button sample</button>
                        <button type="button" class="lbtn"><i class="ico12 plus"></i>button sample</button>
                    </div>
                    <div class="btn_ico_etc">
                        <button type="button" class="btn">button sample<i class="ico12 arrow"></i></button>
                        <button type="button" class="btn green">button sample<i class="ico12 download"></i></button>
                        <button type="button" class="lbtn green">button sample<i class="ico12 download"></i></button>
                    </div>
                    <div class="btn_large">
                        <button type="button" class="btn large">button sample</button>
                        <button type="button" class="btn large">button sample<i class="ico16 arrow_L"></i></button>
                        <button type="button" class="btn large"><i class="ico16 plus_L"></i>button sample</button>
                        <button type="button" class="btn large" disabled>button sample</button>
                    </div>
                </div>
                <div class="btn_ico_wrap">
                    <button type="button" class="lbtn only_ico"><i class="ico12 down_P"></i></button>
                    <button type="button" class="btn only_ico"><i class="ico12 search_W"></i></button>
                    <button type="button" class="btn gray only_ico"><i class="ico12 up"></i></button>
                    <button type="button" class="btn light_purple only_ico"><i class="ico12 down"></i></button>
                </div>
            </div>
        </div>
        <!-- button set : E -->

        <!-- solid button : S -->
        <div class="btn_set_tit_area">
            <div class="left">
                <h2 class="tit">Solid Button</h2>
            </div>
            <div class="right">
            </div>
        </div>

        <div class="btn_tit_area solid_tit">
            <h4 class="btn_tit">Primary</h4>
            <h4 class="btn_tit">Gray</h4>
        </div>

        <div class="btn_set_wrap solid">
            <div class="left">
                <div class="btn_tit_area">
                    <h4 class="btn_tit">Default</h4>
                </div>
                <div class="btn_tit_area">
                    <h4 class="btn_tit">Hover</h4>
                </div>
            </div>

            <div class="right">
                <div class="btn_wrap">
                    <div class="btn_group">
                        <button type="button" class="btn">button sample</button>
                        <button type="button" class="btn hover">button sample</button>
                        <button type="button" class="btn medium">button sample</button>
                    </div>
                    <div class="btn_group">
                        <button type="button" class="btn red">button sample</button>
                        <button type="button" class="btn red hover">button sample</button>
                        <button type="button" class="btn red medium">button sample</button>
                    </div>
                    <div class="btn_group">
                        <button type="button" class="btn gray">button sample</button>
                        <button type="button" class="btn gray hover">button sample</button>
                        <button type="button" class="btn gray medium">button sample</button>
                    </div>
                    <div class="btn_group">
                        <button type="button" class="btn light_purple">button sample</button>
                        <button type="button" class="btn light_purple hover">button sample</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- solid button : E -->

        <!-- outline button : S -->
        <div class="btn_set_tit_area">
            <div class="left">
                <h2 class="tit">Outline Button</h2>
            </div>
            <div class="right">
            </div>
        </div>

        <div class="btn_tit_area top outline_tit">
            <h4 class="btn_tit">Primary</h4>
            <h4 class="btn_tit">Gray</h4>
            <h4 class="btn_tit">Etc</h4>
        </div>

        <div class="btn_set_wrap outline">
            <div class="left">
                <div class="btn_tit_area">
                    <h4 class="btn_tit">Default</h4>
                </div>
                <div class="btn_tit_area">
                    <h4 class="btn_tit">Hover</h4>
                </div>
                <div class="btn_tit_area">
                    <h4 class="btn_tit">Disabled</h4>
                </div>
            </div>

            <div class="right">
                <div class="btn_wrap">
                    <div class="btn_group">
                        <button type="button" class="lbtn">button sample</button>
                        <button type="button" class="lbtn hover">button sample</button>
                        <button type="button" class="lbtn" disabled>button sample</button>
                    </div>
                    <div class="btn_group">
                        <button type="button" class="lbtn red">button sample</button>
                        <button type="button" class="lbtn red hover">button sample</button>
                        <button type="button" class="lbtn red" disabled>button sample</button>
                    </div>
                    <div class="btn_group">
                        <button type="button" class="lbtn gray">button sample</button>
                        <button type="button" class="lbtn gray hover">button sample</button>
                        <button type="button" class="lbtn gray" disabled>button sample</button>
                    </div>
                    <div class="btn_group">
                        <button type="button" class="lbtn green">button sample</button>
                        <button type="button" class="lbtn green hover">button sample</button>
                        <button type="button" class="lbtn green" disabled>button sample</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- outline button : E -->
    </DefaultLayout>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
