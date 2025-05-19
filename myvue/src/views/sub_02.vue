<template>
    <div class="sub_01" style="height: 100%">
        <DefaultLayout>
            <!-- tit_area : S -->
            <div class="tit_area">
                <div class="left">
                    <h2 class="tit">일반현황</h2>
                </div>
                <div class="right">
                    <ul class="location">
                        <li class="home"><router-link to="#">home</router-link></li>
                        <li><router-link to="#">업무현황</router-link></li>
                        <li><strong>일반현황</strong></li>
                    </ul>
                </div>
            </div>
            <!-- tit_area : E -->

            <!-- search_area : S -->
            <div class="search_area general">
                <ul class="search_list_area">
                    <li class="w455">
                        <dl>
                            <dt><strong class="label">년도</strong></dt>
                            <dd>
                                <select class="form_control">
                                    <option>2024</option>
                                </select>
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

            <!-- tbl_style01 general : S -->
            <table class="tbl_style02 common">
                <colgroup>
                    <col style="width: 14%;">
                    <col style="width: 8%;">
                    <col>
                    <col>
                    <col>
                    <col>
                    <col>
                    <col>
                    <col>
                    <col>
                </colgroup>
                <thead class="col2">
                    <tr>
                        <th rowspan="2" colspan="2">구분</th>
                        <th colspan="2">신청</th>
                        <th colspan="2">완료</th>
                        <th rowspan="2">진행</th>
                        <th rowspan="2">완료율(%)</th>
                        <th colspan="2">불합격건수</th>
                    </tr>
                    <tr>
                        <th class="color02">금주</th>
                        <th class="color02">누계</th>
                        <th class="color02">금주</th>
                        <th class="color02">누계</th>
                        <th class="color02">금주</th>
                        <th class="color02">누계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="3" class="color01">납품검사</th>
                        <th class="color02">선납</th>
                        <td>86</td>
                        <td>200</td>
                        <td>3</td>
                        <td>198</td>
                        <td>2</td>
                        <td>99</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th class="color02">납품</th>
                        <td>32</td>
                        <td>1281</td>
                        <td>26</td>
                        <td>1262</td>
                        <td>19</td>
                        <td>98</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th class="color02">합계</th>
                        <td>38</td>
                        <td>1481</td>
                        <td>29</td>
                        <td>1460</td>
                        <td>21</td>
                        <td>98</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th colspan="2" class="color02">품질인증</th>
                        <td>0</td>
                        <td>4</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <!-- tbl_style01 general : E -->
        </DefaultLayout>
    </div>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>