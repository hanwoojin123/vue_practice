<template>
    <DefaultLayout>
        <!-- tit_area : S -->
        <div class="tit_area">
            <div class="left">
                <h2 class="tit">납품검사</h2>
            </div>
            <div class="right">
                <ul class="location">
                    <li class="home"><router-link to="#">home</router-link></li>
                    <li><router-link to="#">업무현황</router-link></li>
                    <li><strong>납품검사</strong></li>
                </ul>
            </div>
        </div>
        <!-- tit_area : E -->

        <!-- tbl_style02 test : S -->
        <table class="tbl_style02 common test">
            <colgroup>
                <col style="width: 180px;">
                <col>
                <col style="width: 180px;">
                <col>
            </colgroup>
            <tbody>
                <tr>
                    <th>신청번호</th>
                    <td>QL2031117001</td>
                    <th>시험구분</th>
                    <td>1차</td>
                </tr>
                <tr>
                    <th>품명</th>
                    <td></td>
                    <th>임시품명</th>
                    <td>BSPDC-2D-200외 2종 4M</td>
                </tr>
                <tr>
                    <th>시험장소</th>
                    <td>유비씨에스</td>
                    <th>약도</th>
                    <td></td>
                </tr>
                <tr>
                    <th>업체 담당자</th>
                    <td>양현국</td>
                    <th>연락처/이메일</th>
                    <td>010-5338-4147</td>
                </tr>
                <tr>
                    <th>E-mail</th>
                    <td>bonjour2@sk.com</td>
                    <th>규격/설명서</th>
                    <td>
                        <button type="button" class="btn_down"><em>2x2 (기존대역+5G)결합기 규격.png</em></button>
                    </td>
                </tr>
                <tr>
                    <th>첨부파일</th>
                    <td>
                        <ul class="btn_down_group">
                            <li>
                                <button type="button" class="btn_down"><em>5G 대역결합기,2X2(LTE+5G)_rev A1_승인원_UBCS_231115.doc</em></button>
                            </li>
                            <li>
                                <button type="button" class="btn_down"><em>5중대역 기주국용 분배기 BSPDC-2D-200_rev A1_승인원_UBCS_231115.doc</em></button>
                            </li>
                            <li>
                                <button type="button" class="btn_down"><em>5중대역 기주국용 분배기 BSPDC-3D-200_rev A1_승인원_UBCS_231115.doc</em></button>
                            </li>
                            <li>
                                <button type="button" class="btn_down"><em>분배기 기주국용2종 + 대역결합기 읹으시험 성적서_UBCS_231115.xlsx</em></button>
                            </li>
                        </ul>
                    </td>
                    <th></th>
                    <td></td>
                </tr>
                <tr>
                    <th>시험일정</th>
                    <td colspan="3">
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
                    <th rowspan="12">세부일정</th>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="상온온습도염수" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="온습도염수" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="온습도염수" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="온습도염수" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="온습도염수" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="온습도염수" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="상온" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="진동" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="침수" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="파워" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="파워" readonly>
                        </div> 
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="flex_wrap date g10">
                            <div class="datepicker">
                                <input type="text" class="datepicker form_control" placeholder="0000.00.00">
                            </div>
                            <input type="text" class="form_control" placeholder="최종" readonly>
                        </div> 
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- tbl_style02 test : E -->

        <!-- tbl_style02 test : S -->
        <table class="tbl_style02 common test">
            <colgroup>
                <col style="width: 180px;">
                <col>
            </colgroup>
            <tbody>
                <tr>
                    <th>담당자</th>
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
                    <th>반려내용</th>
                    <td></td>
                </tr>
                <tr>
                    <th>반려사유</th>
                    <td>
                        <div class="flex_wrap">
                            <div class="flex_wrap radio_wrap w250">
                                <span class="radio_custom">
                                    <input type="radio" name="radio_btn" id="radio_01">
                                    <label for="radio_01">접수</label>
                                </span>
                                <span class="radio_custom">
                                    <input type="radio" name="radio_btn" id="radio_02">
                                    <label for="radio_02">반려</label>
                                </span>
                            </div>
                            <div class="text_wrap">
                                <input type="text" class="form_control">
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- tbl_style02 test : E -->

        <!-- btm_area : S -->
        <div class="btm_area">
            <div class="left">
                <div class="btn_group">
                    <button type="button" class="btn large gray">목록</button>
                </div>
            </div>
            <div class="right">
                <div class="btn_group">
                    <button type="button" class="btn large">확인</button>
                </div>
            </div>
        </div>
        <!-- btm_area : E -->
    </DefaultLayout>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>