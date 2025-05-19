<template>
    <div class="wrap">

        <!-- header: S -->
        <header class="header">
            <div class="header_menu">
                <div class="header_left">
                    <h1 class="logo"><router-link href="javascrip:;"><img :src="logo" alt="SKT QAS" /></router-link></h1>
                    <nav class="nav">
                        <ul class="gnb_menu">
                            <li class="active">
                                <router-link to="#"><h2>업무현황</h2></router-link>
                                <div class="depth2_slide_wrap">
                                    <ul class="depth2">
                                        <div class="depth2_left">
                                            <h3 class="depth2_tit">업무현황</h3>
                                        </div>
                                        <div class="depth2_right">
                                            <ul class="depth2_list">
                                                <li><router-link to="#">납품검사현황</router-link></li>
                                                <li><router-link to="#">일반현황</router-link></li>
                                            </ul>
                                        </div>
                                    </ul>            
                                </div>                    
                            </li>
                            <li>
                                <router-link to="#"><h2>납품검사</h2></router-link>
                                <div class="depth2_slide_wrap">
                                    <ul class="depth2">
                                        <div class="depth2_left">
                                            <h3 class="depth2_tit">납품검사</h3>
                                        </div>
                                        <div class="depth2_right">
                                            <ul class="depth2_list">
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">시정조치</router-link></li> 
                                                <li><router-link to="#">불합격 판정조회</router-link></li> 
                                                <li><router-link to="#">ERP 승인(자동)</router-link></li> 
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(결과조회)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(신청서 작성)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(QAS선납 승인)</router-link></li>
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li> 
                                            </ul>
                                        </div>
                                    </ul>            
                                </div>      
                            </li>
                            <li>
                                <router-link to="#"><h2>사후품질 분석</h2></router-link>
                                <div class="depth2_slide_wrap">
                                    <ul class="depth2">
                                        <div class="depth2_left">
                                            <h3 class="depth2_tit">사후품질 분석</h3>
                                        </div>
                                        <div class="depth2_right">
                                            <ul class="depth2_list">
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">시정조치</router-link></li> 
                                                <li><router-link to="#">불합격 판정조회</router-link></li> 
                                                <li><router-link to="#">ERP 승인(자동)</router-link></li> 
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(결과조회)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(신청서 작성)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(QAS선납 승인)</router-link></li>
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li>
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                            </ul>
                                        </div>
                                    </ul>            
                                </div>            
                            </li>
                            <li>
                                <router-link to="#"><h2>커뮤니티</h2></router-link>
                                <div class="depth2_slide_wrap">
                                    <ul class="depth2">
                                        <div class="depth2_left">
                                            <h3 class="depth2_tit">커뮤니티</h3>
                                        </div>
                                        <div class="depth2_right">
                                            <ul class="depth2_list">
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">시정조치</router-link></li> 
                                                <li><router-link to="#">불합격 판정조회</router-link></li> 
                                            </ul>
                                        </div>
                                    </ul>            
                                </div>       
                            </li>
                            <li>
                                <router-link to="#"><h2>관리</h2></router-link>
                                <div class="depth2_slide_wrap">
                                    <ul class="depth2">
                                        <div class="depth2_left">
                                            <h3 class="depth2_tit">관리</h3>
                                        </div>
                                        <div class="depth2_right">
                                            <ul class="depth2_list">
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">시정조치</router-link></li> 
                                                <li><router-link to="#">불합격 판정조회</router-link></li> 
                                                <li><router-link to="#">ERP 승인(자동)</router-link></li> 
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(결과조회)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(신청서 작성)</router-link></li> 
                                            </ul>
                                        </div>
                                    </ul>            
                                </div>    
                            </li>
                            <li>
                                <router-link to="#"><h2>시스템 관리</h2></router-link>
                                <div class="depth2_slide_wrap">
                                    <ul class="depth2">
                                        <div class="depth2_left">
                                            <h3 class="depth2_tit">시스템 관리</h3>
                                        </div>
                                        <div class="depth2_right">
                                            <ul class="depth2_list">
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">시정조치</router-link></li> 
                                                <li><router-link to="#">불합격 판정조회</router-link></li> 
                                                <li><router-link to="#">ERP 승인(자동)</router-link></li> 
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(결과조회)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(신청서 작성)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(QAS선납 승인)</router-link></li>
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li>
                                                <li><router-link to="#">선납신청 및 조회(신청서 작성)</router-link></li> 
                                                <li><router-link to="#">선납신청 및 조회(QAS선납 승인)</router-link></li>
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                                <li><router-link to="#">인증시험 관리</router-link></li> 
                                            </ul>
                                        </div>
                                    </ul>            
                                </div>                      
                            </li>
                            <li>
                                <router-link to="#"><h2>품질보증 소개</h2></router-link>
                                <div class="depth2_slide_wrap">
                                    <ul class="depth2">
                                        <div class="depth2_left">
                                            <h3 class="depth2_tit">품질보증 소개</h3>
                                        </div>
                                        <div class="depth2_right">
                                            <ul class="depth2_list">
                                                <li><router-link to="#">검사필증 선발행</router-link></li>
                                                <li><router-link to="#">납품검사 관리</router-link></li>
                                                <li><router-link to="#">시험성적서 분석</router-link></li>
                                                <li><router-link to="#">시정조치</router-link></li> 
                                                <li><router-link to="#">불합격 판정조회</router-link></li> 
                                                <li><router-link to="#">ERP 승인(자동)</router-link></li> 
                                                <li><router-link to="#">ERP 미승인 물품조회</router-link></li> 
                                            </ul>
                                        </div>
                                    </ul>            
                                </div>      
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="header_right">
                    <ul class="header_util">
                        <li class="header_user">
                            <span class="user">
                                <strong>홍길동 님</strong>
                            </span>
                        </li>
                        <li class="header_logout">
                            <button type="button" class="header_logiut_btn">로그아웃</button>
                        </li>
                        <li class="header_menu_toggle">
                            <button type="button" class="header_menu_toggle_btn">메뉴</button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- header_menu_popup : S -->
            <div class="header_menu_popup_wrap">
                <div class="header_menu_popup">
                    <div class="header_menu_list">
                        <div class="header_menu_list_top">
                            <h3 class="header_menu_list_tit"><i class="header_menu_list_ico current"></i>업무현황</h3>
                        </div>
                        <div class="header_menu_list_bottom">
                            <ul class="depth">
                                <li>
                                    <router-link to="#">납품검사현황</router-link>
                                </li>
                                <li>
                                    <router-link to="#">일반현황</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header_menu_list">
                        <div class="header_menu_list_top">
                            <h3 class="header_menu_list_tit"><i class="header_menu_list_ico test"></i>납품검사</h3>
                        </div>
                        <div class="header_menu_list_bottom">
                            <ul class="depth">
                                <li>
                                    <router-link to="#">검사필증 선발행</router-link>
                                </li>
                                <li>
                                    <router-link to="#">납품검사 관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">시험성적서 분석</router-link>
                                </li>
                                <li>
                                    <router-link to="#">시정조치</router-link>
                                </li>
                                <li>
                                    <router-link to="#">불합격 판정조회</router-link>
                                </li>
                                <li>
                                    <router-link to="#">ERP 승인(자동)</router-link>
                                </li>
                                <li>
                                    <router-link to="#">ERP 미승인 물품조회</router-link>
                                </li>
                                <li>
                                    <router-link to="#">인증시험 관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">선납신청 및 조회<br>(결과조회)</router-link>
                                </li>
                                <li>
                                    <router-link to="#">선납신청 및 조회<br>(신청서 작성)</router-link>
                                </li>
                                <li>
                                    <router-link to="#">선납신청 및 조회<br>(QAS선납 승인)</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header_menu_list">
                        <div class="header_menu_list_top">
                            <h3 class="header_menu_list_tit"><i class="header_menu_list_ico analyze"></i>사후품질 분석</h3>
                        </div>
                        <div class="header_menu_list_bottom">
                            <ul class="depth">
                                <li>
                                    <router-link to="#">주장비 A/S율</router-link>
                                </li>
                                <li>
                                    <router-link to="#">주장비 전체 A/S율</router-link>
                                </li>
                                <li>
                                    <router-link to="#">중기계 A/S율</router-link>
                                </li>
                                <li>
                                    <router-link to="#">중기계 전체 A/S율</router-link>
                                </li>
                                <li>
                                    <router-link to="#">전송 A/S율</router-link>
                                </li>
                                <li>
                                    <router-link to="#">중기계 운용 A/S건수</router-link>
                                </li>
                                <li>
                                    <router-link to="#">전송 운용 A/S건수</router-link>
                                </li>
                                <li>
                                    <router-link to="#">주장비 운용 A/S건수<br>(업체별)</router-link>
                                </li>
                                <li>
                                    <router-link to="#">중계기 운용 A/S건수<br>(업체별, 고장유형별)</router-link>
                                </li>
                                <li>
                                    <router-link to="#">주장비 운용 A/S건수<br>(업체별 세부현황)</router-link>
                                </li>
                                <li>
                                    <router-link to="#">중계기 운용 A/S건수<br>(업체별 세부현황)</router-link>
                                </li>
                                <li>
                                    <router-link to="#">ERP 계약 Data</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header_menu_list">
                        <div class="header_menu_list_top">
                            <h3 class="header_menu_list_tit"><i class="header_menu_list_ico community"></i>커뮤니티</h3>
                        </div>
                        <div class="header_menu_list_bottom">
                            <ul class="depth">
                                <li>
                                    <router-link to="#">공지사항</router-link>
                                </li>
                                <li>
                                    <router-link to="#">Q&A</router-link>
                                </li>
                                <li>
                                    <router-link to="#">FAQ</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header_menu_list">
                        <div class="header_menu_list_top">
                            <h3 class="header_menu_list_tit"><i class="header_menu_list_ico management"></i>관리</h3>
                        </div>
                        <div class="header_menu_list_bottom">
                            <ul class="depth">
                                <li>
                                    <router-link to="#">물품관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">신규 물품관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">물품분류 관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">품질검사 제외품목 관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">시험성적서</router-link>
                                </li>
                                <li>
                                    <router-link to="#">협력사</router-link>
                                </li>
                                <li>
                                    <router-link to="#">협력사 품질관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">사용자관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">홈 관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">임대설비 관리</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header_menu_list">
                        <div class="header_menu_list_top">
                            <h3 class="header_menu_list_tit"><i class="header_menu_list_ico system"></i>시스템 관리</h3>
                        </div>
                        <div class="header_menu_list_bottom">
                            <ul class="depth">
                                <li>
                                    <router-link to="#">사용자 및 권한관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">로그관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">메뉴관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">코드관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">메시지 관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">조직 관리</router-link>
                                </li>
                                <li>
                                    <router-link to="#">시스템 관리</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
            <!-- header_menu_popup : E -->
        </header>
        <!-- header : E -->

        <!-- container : S -->
        <div class="container">
            <!-- aside : S -->
            <aside class="lnb">
                <div class="lnb_top_area">
                    <h2 class="lnb_top_area_tit">납품검사</h2>
                </div>
                <ul class="lnb_menu">
                    <li>
                        <router-link to="#">검사필증 선발행</router-link>
                    </li>
                    <li class="depth active">
                        <router-link to="#">납품검사 관리</router-link>
                        <ul class="depth2">
                            <li class="active"><router-link to="#">납품검사 관리</router-link></li>
                            <li><router-link to="#">납품검사 관리</router-link></li>
                            <li><router-link to="#">납품검사 관리</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="#">시험성적서 분석</router-link>
                    </li>
                    <li>
                        <router-link to="#">시정조치</router-link>
                    </li>
                    <li>
                        <router-link to="#">불합격 판정조회</router-link>
                    </li>
                    <li>
                        <router-link to="#">ERP 승인(자동)</router-link>
                    </li>
                    <li>
                        <router-link to="#">ERP 미승인 물품조회</router-link>
                    </li>
                    <li>
                        <router-link to="#">인증시험 관리</router-link>
                    </li>
                    <li>
                        <router-link to="#">선납신청 및 조회</router-link>
                    </li>
                    <li>
                        <router-link to="#">QAS선납 승인</router-link>
                    </li>
                </ul>
            </aside>
            <!-- aside : E -->

            <!-- contents: S -->
            <div class="contents">
                <div class="section">
                    <slot />
                </div>
            </div>
        </div>
        <!-- container : E -->

        <!-- footer : S -->
        <footer class="footer">
            <div class="footer_wrap">
                <p class="footer_copy">CopyrightⓒSK Telecom Co., Ltd. All Rights Reserved.</p>
            </div>
        </footer>
        <!-- footer : E -->
        
    </div>
    <!-- //wrap -->
</template>

<script setup>
    import logo from '@/assets/images/common/img_logo.svg'
</script>