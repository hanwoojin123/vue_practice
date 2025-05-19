<template>
    <DefaultLayout>
        <!-- tit_area : S -->
        <div class="tit_area">
            <div class="left">
                <h2 class="tit">납품검사현황</h2>
            </div>
            <div class="right">
                <ul class="location">
                    <li class="home"><router-link to="#">home</router-link></li>
                    <li><router-link to="#">업무현황</router-link></li>
                    <li><strong>납품검사현황</strong></li>
                </ul>
            </div>
        </div>
        <!-- tit_area : E -->

        <!-- search_area : S -->
        <div class="search_area">
            <ul class="search_list_area">
                <li>
                    <dl>
                        <dt><strong class="label">연도</strong></dt>
                        <dd>
                            <div class="flex_wrap date">
                                <select class="form_control">
                                    <option>2024</option>
                                </select>
                                <span>~</span>
                                <select class="form_control">
                                    <option>2024</option>
                                </select>
                            </div>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">납기</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>월별</option>
                                <option>분기별</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">차수별</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>전체</option>
                                <option>1차</option>
                                <option>2차</option>
                                <option>3차</option>
                                <option>4차</option>
                                <option>5차</option>
                                <option>이월</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">플렌트</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>전체</option>
                                <option>대구지사</option>
                                <option>MNO Biz</option>
                                <option>C&I Biz</option>
                                <option>Network CIC</option>
                                <option>CMS</option>
                                <option>수도권Network본부</option>
                                <option>부산Network본부</option>
                                <option>대구Network본부</option>
                                <option>서부Network본부</option>
                                <option>중부Network본부</option>
                                <option>Network연구원</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><strong class="label">구분</strong></dt>
                        <dd>
                            <select class="form_control wp100">
                                <option>전체</option>
                                <option>동기</option>
                                <option>비동기</option>
                                <option>전송망</option>
                                <option>WiBro</option>
                            </select>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <select class="dt_select wp100">
                                <option>수량기준</option>
                                <option>이상</option>
                                <option>이하</option>
                            </select>
                        </dt>
                        <dd>
                            <input type="text" class="wp100 form_control">
                        </dd>
                    </dl>
                </li>
                <li class="search_list_area_radio">
                    <dl>
                        <dt><strong class="label">양식</strong></dt>
                        <dd>
                            <div class="flex_wrap radio_wrap w250">
                                <span class="radio_custom">
                                    <input type="radio" name="radio_btn" id="radio_01">
                                    <label for="radio_01">양식 1</label>
                                </span>
                                <span class="radio_custom">
                                    <input type="radio" name="radio_btn" id="radio_02">
                                    <label for="radio_02">양식 2</label>
                                </span>
                                <span class="radio_custom">
                                    <input type="radio" name="radio_btn" id="radio_03">
                                    <label for="radio_03">양식 3</label>
                                </span>
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
            </div>
            <div class="right">
                <div class="sub_tit_btn_group">
                    <button type="button" class="lbtn green">엑셀<i class="ico12 download"></i></button>
                </div>
            </div>
        </div>
        <!-- sub_tit_area : E -->

        <!-- tbl_style01 delivery : S -->
        <table class="tbl_style02 common">
            <colgroup>
                <col style="width: 140px;">
                <col style="width: 70px">
                <col style="width: 70px">
                <col>
                <col style="width: 120px">
                <col style="width: 120px">
                <col style="width: 140px">
                <col style="width: 140px">
                <col style="width: 140px">
            </colgroup>
            <thead class="col2">
                <tr>
                    <th rowspan="2">연도</th>
                    <th rowspan="2" colspan="2">구분</th>
                    <th rowspan="2">장비군</th>
                    <th rowspan="2">계획일자</th>
                    <th rowspan="2">계획수량</th>
                    <th colspan="2">구매실적현황</th>
                    <th>납품검사현황</th>
                </tr>
                <tr>
                    <th class="color01">수량</th>
                    <th class="color01">실적율(%)</th>
                    <th class="color01">수량</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowspan="9" class="color01">2023</th>
                    <th rowspan="9" class="color02">비동기</th>
                    <th rowspan="9" class="color02">동기</th>
                    <td class="t_center">기지국</td>
                    <td class="t_center">01 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">02 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">03 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">04 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">05 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">06 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">07 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">08 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="t_center">기지국</td>
                    <td class="t_center">09 월</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
        <!-- tbl_style01 delivery : E -->
    </DefaultLayout>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>