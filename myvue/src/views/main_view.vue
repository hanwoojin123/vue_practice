<template>
    <!-- wrap : S -->
    <div class="wrap main">

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

            <!-- contents: S -->
            <div class="contents">
                <div class="section">
                    <div class="left">
                        <!-- main_intro_area : S -->
                        <div class="main_intro_area">
                            <h2 class="main_intro_tit">
                                SK텔레콤 품질보증시스템
                                <strong><em class="color2">Q</em>uality <em class="color1">A</em>ssurance <em class="color1">S</em>ystem</strong>
                            </h2>
                            <p class="main_intro_desc">완벽한 품질과 최고의 파트너와 함께합니다.</p>
                        </div>
                        <!-- main_intro_area : E -->

                        <!-- main_menu_area : S -->
                        <div class="main_menu_area">
                            <ul class="main_menu_list">
                                <li><router-link to="#">#검사필증 선발행</router-link></li>
                                <li><router-link to="#">#납품검사 관리</router-link></li>
                                <li><router-link to="#">#시험 성적서 분석</router-link></li>
                                <li><router-link to="#">#시정조치</router-link></li>
                                <li><router-link to="#">#불합격 판정조회</router-link></li>
                                <li><router-link to="#">#인증시험 관리</router-link></li>
                                <li><router-link to="#">#선납신청 및 조회</router-link></li>
                            </ul>
                        </div>
                        <!-- main_menu_area : E -->

                        <!-- main_notice_area : S -->
                        <div class="main_notice_area">
                            <div class="main_tit_area">
                                <div class="left">
                                    <h3 class="tit">Notice</h3>
                                </div>
                                <div class="right">
                                    <button type="button" class="btn_more">더보기</button>
                                </div>
                            </div>
                            <ul class="main_notice_list">
                                <li>
                                    <router-link to="#">
                                        <div class="notice_top">
                                            <div class="left">
                                                <em class="notice main">주요공지</em>
                                            </div>
                                            <div class="right">
                                                <span class="date">24.01.01</span>
                                            </div>
                                        </div>
                                        <div class="notice_bottom">
                                            <p class="notice_tit">2024년 Access 장비 QA담당자 변경을 공지합니다.</p>
                                        </div>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        <div class="notice_top">
                                            <div class="left">
                                                <em class="notice">공지</em>
                                            </div>
                                            <div class="right">
                                                <span class="date">23.02.06</span>
                                            </div>
                                        </div>
                                        <div class="notice_bottom">
                                            <p class="notice_tit">2023년 품질보증 업무분장 재공지 (Access 품질보증)</p>
                                        </div>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        <div class="notice_top">
                                            <div class="left">
                                                <em class="notice">공지</em>
                                            </div>
                                            <div class="right">
                                                <span class="date">23.01.01</span>
                                            </div>
                                        </div>
                                        <div class="notice_bottom">
                                            <p class="notice_tit">2024년 Access 장비 QA담당자 변경을 공지합니다.</p>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <!-- main_notice_area : E -->

                        <!-- main_partner_area : S -->
                        <div class="main_partner_area">
                            <ul class="main_partner_list">
                                <li>
                                    <router-link to="#"><img :src="partner_on" alt="" /></router-link>
                                </li>
                                <li>
                                    <router-link to="#"><img :src="partner_rcs" alt="" /></router-link>
                                </li>
                                <li>
                                    <router-link to="#"><img :src="partner_nams" alt="" /></router-link>
                                </li>
                                <li>
                                    <router-link to="#"><img :src="partner_fims" alt="" /></router-link>
                                </li>
                                <li>
                                    <router-link to="#"><img :src="partner_biss" alt="" /></router-link>
                                </li>
                            </ul>
                        </div>
                        <!-- main_partner_area : E -->
                    </div>
                    <div class="right">
                        <!-- main_user_area : S -->
                        <div class="main_user_area">
                            <div class="user_area_top">
                                <div class="left">
                                    <p class="greeting">안녕하세요,<br><em class="color1">홍길동</em>님</p>
                                </div>
                                <div class="right">
                                    <div class="user_btn_area">
                                        <button type="button" class="user_btn color1">납품지시</button>
                                        <button type="button" class="user_btn color2">선납신청</button>
                                    </div>
                                </div>
                            </div>
                            <div class="user_area_dashboard">
                                <div class="dashboard_tit_area">
                                    <div class="left">
                                        <p class="txt">업무현황을 확인하세요.</p>
                                    </div>
                                    <div class="right">
                                        <span class="date">2023.12.01 ~ 2023.12.31</span>
                                    </div>
                                </div>
                                <div class="dashboard_cont_area">
                                    <ul class="dashboard_list_area">
                                        <li>
                                            <div class="dashboard_list_tit_area">
                                                <div class="left">
                                                    <h4 class="tit">납품검사</h4>
                                                </div>
                                                <div class="right">
                                                    <button type="button" class="btn_more ty02">더보기</button>
                                                </div>
                                            </div>
                                            <ul class="dashboard_list_cont_area">
                                                <li>
                                                    <router-link to="#">
                                                        <strong>5</strong>
                                                        <p>접수대기</p>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">
                                                        <strong>10</strong>
                                                        <p>판정대기</p>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="dashboard_list_tit_area">
                                                <div class="left">
                                                    <h4 class="tit">선납</h4>
                                                </div>
                                                <div class="right">
                                                    <button type="button" class="btn_more ty02">더보기</button>
                                                </div>
                                            </div>
                                            <ul class="dashboard_list_cont_area">
                                                <li>
                                                    <router-link to="#">
                                                        <strong>5</strong>
                                                        <p>승인대기</p>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="dashboard_list_tit_area">
                                                <div class="left">
                                                    <h4 class="tit">인증시험</h4>
                                                </div>
                                                <div class="right">
                                                    <button type="button" class="btn_more ty02">더보기</button>
                                                </div>
                                            </div>
                                            <ul class="dashboard_list_cont_area">
                                                <li>
                                                    <router-link to="#">
                                                        <strong>5</strong>
                                                        <p>접수대기</p>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- main_user_area : E -->

                        <!-- main_qna_area : S -->
                        <div class="main_qna_area">
                            <div class="main_tit_area">
                                <div class="left">
                                    <div class="tab_btn_wrap">
                                        <button type="button" class="tab_btn" data-tab="tab01"><span class="txt active">Q&#38;A</span></button><!--
                                        --><button type="button" class="tab_btn" data-tab="tab02"><span class="txt">FAQ</span></button>
                                    </div>
                                </div>
                                <div class="right">
                                    <button type="button" class="btn_more">더보기</button>
                                </div>
                            </div>
                            <div class="qnt_cont_wrap">
                                <div class="qna_cont_area" id="tab01">
                                    <ul class="qna_cont_list">
                                        <li>
                                            <router-link to="#">
                                                <em>Q</em>
                                                <strong>납품검사 신청시 물품코드 없음 관련 확인 요청 건</strong>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <em>Q</em>
                                                <strong>물품 맵핑 확인 요청드립니다.</strong>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <em>Q</em>
                                                <strong>납품검사 신청시 물품코드 없을 경우</strong>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="qna_cont_area" id="tab02">
                                    <ul class="qna_cont_list">
                                        <li>
                                            <router-link to="#">
                                                <em>Q</em>
                                                <strong>납품검사 신청시 물품코드 없음 관련 확인 요청 건2222</strong>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <em>Q</em>
                                                <strong>물품 맵핑 확인 요청드립니다.2222</strong>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <em>Q</em>
                                                <strong>납품검사 신청시 물품코드 없을 경우2222</strong>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- main_qna_area : E -->

                        <!-- main_manual_area : S -->
                        <div class="main_manual_area">
                            <div class="left">
                                <p class="txt">처음 QAS를<br>이용하시나요?</p>
                            </div>
                            <div class="right">
                                <button type="button" class="btn_manual"><em>QAS 매뉴얼 다운로드</em></button>
                            </div>
                        </div>
                        <!-- main_manual_area : E -->
                    </div>
                </div>
            </div>
        </div>

        <!-- footer : S -->
        <footer class="footer">
            <div class="footer_wrap">
                <p class="footer_copy">CopyrightⓒSK Telecom Co., Ltd. All Rights Reserved.</p>
            </div>
        </footer>
        <!-- footer : E -->
    </div>
    <!-- wrap : E -->
</template>

<script setup>
    import logo from '@/assets/images/common/img_logo.svg'
    import partner_on from '@/assets/images/main/img_partner_on.svg'
    import partner_rcs from '@/assets/images/main/img_partner_rcs.svg'
    import partner_nams from '@/assets/images/main/img_partner_nams.svg'
    import partner_biss from '@/assets/images/main/img_partner_biss.svg'
    import partner_fims from '@/assets/images/main/img_partner_fims.svg'
</script>