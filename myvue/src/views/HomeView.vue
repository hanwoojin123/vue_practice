<template>
    <div class="file-list">
        <div class="pro-list-wrap">
            <div class="pro-list-top">
                <div class="project-name">
                    <h1>SKT QAS</h1>
                </div>
                <ul class="worker">
                    <!-- <li><strong>박병조 차장 [P]</strong><em>|</em>010-4841-3378<em>|</em>eva01x@muplus.co.kr</li> -->
                    <!-- <li><strong>장원복 차장 [P]</strong><em>|</em>010-8834-0951 <em>|</em>jwb@muplus.com</li> -->
                    <!-- <li><strong>박준환 대리 [P]</strong><em>|</em>010-6609-3537<em>|</em>ikwladu2@muplus.co.kr</li> -->
                    <!-- <li><strong>안성은 차장 [D]</strong><em>|</em>010-9133-4378<em>|</em>d_seongeun@muplus.co.kr</li> -->
                    <!-- <li><strong>정민주 과장 [D]</strong><em>|</em>010-4051-3707<em>|</em>minnju92@muplus.co.kr</li> -->
                    <!-- <li><strong>문소희 과장 [D]</strong><em>|</em>010-6436-6039<em>|</em>xoonxoxee@muplus.co.kr</li> -->
                    <!-- <li><strong>허예나 대리 [D]</strong><em>|</em>010-2561-2032<em>|</em>yenaheo7308@muplus.co.kr</li> -->
                    <!-- <li><strong>천새미 주임 [D]</strong><em>|</em>010-8957-5560<em>|</em>chunsaemi@muplus.co.kr</li> -->
                    <li><strong>한우진 주임 [P]</strong><em>|</em>010-3809-0525<em>|</em>hanwoojin3@muplus.co.kr</li>
                </ul>
            </div>

            <div class="toggle-btn-area">
                <strong>프로젝트 환경</strong>
                <button type="button" class="togglebtn">Closed</button>
            </div>

            <!--********* info ********** -->
            <table class="info-tbl">
                <colgroup>
                    <col style="width: 180px" />
                    <col />
                    <col style="width: 180px" />
                    <col />
                    <col style="width: 180px" />
                    <col />
                </colgroup>
                <tbody>
                    <tr>
                        <th>문서 및 버전</th>
                        <td>HTML5, CSS3</td>
                        <th>인코딩</th>
                        <td>UTF-8</td>
                        <th>해상도 기준 / 디자인 너비</th>
                        <td>1920</td>
                    </tr>
                    <tr>
                        <th>웹 유형</th>
                        <td>PC Web</td>
                        <!-- 
                        PC, Mobile, Responcive 
                        -->
                        <th>PC 웹 호환성</th>
                        <td>chrome, edge, firefox</td>
                        <!-- 
                        <th>Mobile 웹 호환성</th>
                        <td>안드로이드 0.x 이상, IOS 10.x 이상, 사파리, 크롬, 삼성인터넷</td>
                        -->
                        <th>SERVER</th>
                        <td>http://112.217.230.10/project_/</td>
                    </tr>
                    <!-- <tr>
                        <th>웹 접근성</th>
                        <td colspan="5">
                            <ul class="wai-site-list">
                                <li>NAVER Accessibility <a href="https://accessibility.naver.com/" target="blink">바로가기</router-link></li>
                                <li>웹접근성 연구소 <a href="https://www.wah.or.kr:444/index.asp" target="blink">바로가기</router-link></li>
                                <li>WebWatch <a href="http://www.webwatch.or.kr/" target="blink">바로가기</router-link></li>
                                <li>웹 접근성 점검 매뉴얼 <a href="https://www.wah.or.kr:444/board/boardView.asp?page=3&amp;brd_sn=4&amp;brd_idx=518" target="blink">바로가기</router-link></li>
                                <li>웹 접근성 품질인증 표준심사 지침 <a href="http://www.webwatch.or.kr/include/fileDown.asp?filename=%uC6F9%20%uC811%uADFC%uC131%20%uD488%uC9C8%uC778%uC99D%20%uD45C%uC900%uC2EC%uC0AC%20%uC9C0%uCE68.pdf">다운로드</router-link></li>
                            </ul>
                        </td>
                    </tr> -->
                </tbody>
            </table>
            <!--********* info ********** -->

            <!--********* Directory ********** -->
            <pre class="code">
    /* Directory */
    src
        assets
            _fonts
            _images
            _styles
        components
            _HelloWorld.vue
        layouts
            _DefaultLayout.vue
        router
            _index.js
        views
            _antCarousel.vue
            _antCollapse.vue
            _antDatePicker.vue
            _antMenu.vue
            _antTab.vue
            _antTolltip.vue
            _antTree.vue
            _HomeView.vue
            _sub_template.vue
            _main.vue
            _sub_01.vue
            _sub_02.vue
            _sub_03.vue
            _sub_04.vue
        App.vue
        main.js
</pre>
            <!--********* Directory ********** -->

            <p class="total">total : <span></span></p>

            <!--********* publishing list ********** -->
            <table class="publishing-list" id="table">
                <colgroup>
                    <col style="width: 12%" />
                    <col style="width: 12%" />
                    <col style="width: 12%" />
                    <col style="width: 12%" />
                    <col style="width: 120px" />
                    <col style="width: 12%" />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>1Depth</th>
                        <th>2Depth</th>
                        <th>3Depth</th>
                        <th>4Depth</th>
                        <th>Directory</th>
                        <th>fileName(link)</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="1">Template</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/sub_template" class="linktxt">sub_template.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="7" class="hr-line"></td>
                    </tr>

                    <tr>
                        <th rowspan="1">Main</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/main_view" class="linktxt">main_view.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="7" class="hr-line"></td>
                    </tr>

                    <tr>
                        <th rowspan="4">Sub</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/sub_01" class="linktxt">sub_01.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/sub_02" class="linktxt">sub_02.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/sub_03" class="linktxt">sub_03.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/sub_04" class="linktxt">sub_04.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="7" class="hr-line"></td>
                    </tr>

                    <tr>
                        <th rowspan="7">Components</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/antCollapse" class="linktxt">antCollapse.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/antMenu" class="linktxt">antMenu.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/antDatePicker" class="linktxt">antDatePicker.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/antTooltip" class="linktxt">antTooltip.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/antTree" class="linktxt">antTree.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/antTab" class="linktxt">antTab.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <router-link to="/antCarousel" class="linktxt">antCarousel.vue</router-link>
                        </td>
                        <td>
                            <ul class="notelist">
                                <li><em>0000-00-00</em>업데이트</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!--********* publishing list ********** -->
        </div>
        <p class="copy">Copyright ⓒ MUPLUS All Rights Reserved.</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeView',
});
</script>

<style scoped>
    @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
    * {
        border: 0;
        padding: 0;
        margin: 0;
        font-family: "Noto Sans KR", "맑은고딕", "Malgun Gothic", "돋움", Dotum, Arial, sans-serif;
        font-size: 13px;
        color: #444;
        list-style: none;
        font-style: normal;
        text-decoration: none;
    }
    body {
        background: #f9f9f9;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .file-list {
        min-width: 1600px;
    }
    .pro-list-wrap {
        position: relative;
        padding: 20px;
        margin: 20px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    .pro-list-top {
        overflow: hidden;
    }
    .pro-list-top .project-name {
        float: left;
    }
    .pro-list-top .project-name h1 {
        font-size: 38px;
        color: #000;
        font-weight: 700;
    }
    .worker {
        float: right;
    }
    .worker li {
        margin: 5px 0;
        line-height: 20px;
        color: #888;
        letter-spacing: 0.5px;
        font-size: 12px;
    }
    .worker li strong {
        font-weight: bold;
        color: #222;
        font-size: 12px;
    }
    .worker li em {
        color: #eee;
        font-size: 11px;
        padding: 0 5px;
        font-size: 12px;
    }
    .toggle-btn-area {
        /* text-align: right; */
        margin: 20px 0 10px;
        display: flex;
        align-items: center;
    }
    .toggle-btn-area strong {
        position: relative;
        font-size: 16px;
        font-weight: 500;
        padding-left: 10px;
    }
    .toggle-btn-area strong:after {
        content: "";
        width: 4px;
        height: 14px;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -6px;
        background: #000;
    }
    .togglebtn {
        width: 70px;
        height: 26px;
        line-height: 24px;
        border: 1px solid #222;
        background: #fff;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 10px;
    }
    .togglebtn.on {
        background: #222;
        color: #fff;
    }
    .info-tbl {
        width: 100%;
        table-layout: fixed;
        margin: 0 0 20px;
        padding: 5px 0;
        border-top: 1px dashed #ddd;
    }
    .info-tbl th {
        background: #f9f9f9;
        color: #000;
    }
    .info-tbl th,
    .info-tbl td {
        font-size: 12px;
        vertical-align: middle;
        border-bottom: 1px dashed #ddd;
        text-align: left;
        padding: 10px;
    }
    .info-tbl td {
        letter-spacing: 1px;
    }
    .wai-site-list li {
        font-size: 12px;
    }
    .wai-site-list li + li {
        margin-top: 4px;
    }
    .wai-site-list li a {
        font-size: 12px;
        color: #4794f5;
        margin-left: 5px;
    }
    .info {
        margin: 20px 0;
        padding: 5px 0;
        border-top: 1px dashed #ddd;
        border-bottom: 1px dashed #ddd;
    }
    .info li {
        margin: 4px 0;
        font-size: 12px;
        display: table;
        width: 100%;
        height: 22px;
    }
    .info li strong {
        display: table-cell;
        font-weight: bold;
        color: #000;
        width: 150px;
        vertical-align: middle;
        font-size: 12px;
    }
    .info li span {
        display: table-cell;
        color: #888;
        font-size: 12px;
        vertical-align: middle;
    }
    .publishing-list {
        width: 100%;
        table-layout: fixed;
        border-right: 1px solid #ddd;
        margin-top: 10px;
    }
    .publishing-list thead th {
        background: #222;
        color: #fff;
        height: 40px;
    }
    .publishing-list th {
        background: #f9f9f9;
        height: 35px;
        font-size: 13px;
        color: #000;
        font-weight: bold;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 0 10px;
        text-align: center;
    }
    .publishing-list td {
        height: 35px;
        font-size: 13px;
        color: #666;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 0 10px;
        text-align: center;
    }
    .publishing-list td.hr-line {
        height: 5px;
        font-weight: bold;
        color: #000;
        padding: 0 20px;
    }
    .t_lt {
        text-align: left !important;
    }
    .t_ct {
        text-align: center !important;
    }
    .t_rt {
        text-align: right !important;
    }
    .linktxt {
        color: #4794f5;
    }
    .notelist {
        margin: 0;
    }
    .notelist li {
        padding: 2px 0;
        line-height: 22px;
        color: #444;
        font-size: 12px;
        position: relative;
        padding-left: 70px;
        border-top: 1px dashed #ddd;
        text-align: left;
    }
    .notelist li:first-child {
        border-top: 0;
    }
    .notelist li em {
        display: inline-block;
        font-size: 11px;
        color: #bbb;
        font-weight: 500;
        position: absolute;
        top: 2px;
        left: 0;
    }
    .notelist li:last-child em {
        color: #ea002c;
    }
    .total span {
        font-weight: 600;
        color: #000;
        padding-left: 2px;
    }
    .copy {
        text-align: center;
        padding: 0 0 20px;
        font-size: 11px;
        color: #bbb;
        text-transform: uppercase;
    }
    .code {
        display: block;
        margin: 0;
        font-size: 12px;
        color: #fff;
        line-height: 22px;
        padding: 20px;
        background: #222;
        letter-spacing: 1px;
        overflow: auto;
        border-radius: 5px;
        margin-bottom: 20px;
    }
</style>
