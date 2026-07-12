<!DOCTYPE html>
<html lang="ar" dir="rtl" id="mainHtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>سينما فلوكس | CinemaFlux</title>
    <style>
        /* المتغيرات الأساسية للألوان - تدعم الوضع الفاتح والغامق بشكل ديناميكي */
        :root {
            --bg-main: #0b1116;
            --bg-surface: #06090c;
            --bg-card: #121b22;
            --border-color: #1c252d;
            --text-main: #ffffff;
            --text-sub: #9aa6b1;
            --accent: #e50914;
            --nav-bg: #06090c;
        }

        [data-theme="light"] {
            --bg-main: #f0f2f5;
            --bg-surface: #ffffff;
            --bg-card: #ffffff;
            --border-color: #dcdcdc;
            --text-main: #1a1a1a;
            --text-sub: #65676b;
            --accent: #e50914;
            --nav-bg: #ffffff;
        }

        html, body {
            max-width: 100%;
            overflow-x: hidden; margin: 0; padding: 0;
            background-color: var(--bg-main); color: var(--text-main);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            transition: background-color 0.3s, color 0.3s;
        }
        body { padding-bottom: 75px; box-sizing: border-box; }
        
        /* الهيدر */
        header {
            background-color: var(--bg-surface);
            padding: 15px; border-bottom: 1px solid var(--border-color);
            display: flex; justify-content: space-between; align-items: center;
        }
        .logo-text { font-size: 20px; font-weight: bold; color: var(--accent); }

        .container { width: 100%; max-width: 1000px; margin: 0 auto; padding: 0 12px; box-sizing: border-box; }
        
        /* شريط التنقل السفلي الاحترافي */
        .bottom-nav {
            position: fixed;
            bottom: 0; left: 0; right: 0; height: 60px;
            background-color: var(--nav-bg); border-top: 1px solid var(--border-color);
            display: flex; justify-content: space-around; align-items: center;
            z-index: 999;
        }
        .nav-item {
            display: flex;
            flex-direction: column; align-items: center; justify-content: center;
            color: var(--text-sub); font-size: 11px; cursor: pointer; flex: 1; height: 100%; text-decoration: none;
            gap: 4px;
        }
        .nav-item.active { color: var(--accent); }
        .nav-icon { font-size: 20px; }

        /* واجهات التطبيق المتعددة */
        .app-view { display: none; }
        .app-view.active { display: block; }

        /* السلايدر العلوي لأحدث الأفلام */
        .slider-container { margin: 15px 0; position: relative; width: 100%; }
        .featured-slider {
            display: flex;
            gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory;
            padding-bottom: 5px; -webkit-overflow-scrolling: touch;
        }
        .featured-slider::-webkit-scrollbar { display: none; }
        .slide-item {
            min-width: 85%;
            scroll-snap-align: start; position: relative;
            height: 180px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); cursor: pointer;
        }
        .slide-img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6); }
        .slide-details {
            position: absolute;
            bottom: 0; left: 0; right: 0; padding: 15px;
            background: linear-gradient(transparent, rgba(0,0,0,0.9)); color: #fff;
        }
        .slide-title { font-size: 16px; font-weight: bold; margin: 0 0 5px 0; }
        .slide-btn {
            background-color: var(--accent);
            color: white; border: none; padding: 6px 14px;
            font-size: 12px; font-weight: bold; border-radius: 20px; display: inline-flex; align-items: center; gap: 5px;
        }

        /* تصنيفات وأسلاك الأفلام العادية */
        .row-header { display: flex; justify-content: space-between; align-items: center; margin: 20px 0 10px 0; }
        .row-title { font-size: 16px; font-weight: bold; padding: 0 8px; cursor: pointer; display: flex; align-items: center; gap: 5px; }
        .row-title:hover { color: var(--accent); }
        .row-title::after { content: " ❯"; font-size: 12px; opacity: 0.7; }
        html[dir="rtl"] .row-title { border-right: 4px solid var(--accent); }
        html[dir="ltr"] .row-title { border-left: 4px solid var(--accent); }
        html[dir="rtl"] .row-title::after { content: " ❮"; }
        
        .movies-slider { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 10px; width: 100%; }
        .movies-slider::-webkit-scrollbar { height: 4px; }
        .movies-slider::-webkit-scrollbar-thumb { background-color: var(--border-color); border-radius: 10px; }
        .movie-card { min-width: 115px; max-width: 115px; cursor: pointer; }
        .poster-wrapper { position: relative; width: 100%; height: 160px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); }
        .movie-poster { width: 100%; height: 100%; object-fit: cover; }
        .movie-info { padding: 6px 0; }
        .movie-name { font-size: 12px; font-weight: bold; margin: 0 0 4px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .movie-meta { display: flex; flex-direction: column; gap: 2px; font-size: 11px; color: var(--text-sub); }
        .imdb-badge { background-color: var(--border-color); color: var(--text-main); padding: 1px 4px; border-radius: 3px; font-weight: bold; font-size: 10px; display: inline-block; width: fit-content; }

        /* تصميم شبكة الأفلام المخصصة لصفحة التصنيف الكاملة */
        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 15px; margin-top: 15px;
        }

        /* صفحة البحث */
        .search-container { padding: 15px 0; }
        .search-bar-wrapper {
            position: relative;
            display: flex; align-items: center;
            background-color: var(--bg-card); border: 1px solid var(--border-color);
            border-radius: 25px; padding: 5px 15px; margin-bottom: 20px;
        }
        .search-bar-wrapper input {
            flex: 1;
            border: none; background: transparent; color: var(--text-main);
            padding: 8px 5px; font-size: 14px; outline: none;
        }
        .voice-icon { font-size: 18px; color: var(--text-sub); cursor: pointer; margin: 0 5px; }
        .recent-searches-title { font-size: 15px; font-weight: bold; margin-bottom: 15px; color: var(--text-main); }
        
        /* قائمة عمودية لنتائج البحث والسجلات */
        .search-list-vertical { display: flex; flex-direction: column; gap: 12px; }
        .search-item-row {
            display: flex;
            gap: 15px; background-color: var(--bg-surface);
            padding: 10px; border-radius: 8px; border: 1px solid var(--border-color); cursor: pointer; position: relative;
        }
        .search-item-poster { width: 65px; height: 95px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border-color); }
        .search-item-details { display: flex; flex-direction: column; justify-content: center; gap: 6px; }
        .search-item-title { font-size: 14px; font-weight: bold; margin: 0; }
        .search-item-meta { font-size: 12px; color: var(--text-sub); }
        .remove-search-btn { position: absolute; top: 10px; font-size: 18px; color: #dc3545; cursor: pointer; font-weight: bold; }
        html[dir="rtl"] .remove-search-btn { left: 15px; }
        html[dir="ltr"] .remove-search-btn { right: 15px; }

        /* صفحة البروفايل */
        .profile-card {
            background-color: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0;
        }
        .profile-title { font-size: 16px; font-weight: bold; margin-bottom: 5px; }
        .profile-subtitle { font-size: 12px; color: var(--text-sub); margin-bottom: 15px; }
        .profile-btn {
            background-color: #fff;
            color: #000; border: none; padding: 10px 24px;
            font-size: 14px; font-weight: bold; border-radius: 25px; cursor: pointer; transition: 0.2s;
        }
        .profile-btn:hover { opacity: 0.9; }
        
        /* القوائم الخيارية داخل البروفايل والاعدادات */
        .list-menu { display: flex; flex-direction: column; background-color: var(--bg-surface); border-radius: 10px; border: 1px solid var(--border-color); overflow: hidden; margin-bottom: 20px; }
        .menu-item {
            display: flex;
            justify-content: space-between; align-items: center;
            padding: 15px; border-bottom: 1px solid var(--border-color); cursor: pointer; color: var(--text-main); text-decoration: none;
        }
        .menu-item:last-child { border-bottom: none; }
        .menu-label { font-size: 14px; display: flex; align-items: center; gap: 10px; }
        .arrow-icon { color: var(--text-sub); font-size: 14px; font-weight: bold; }
        html[dir="rtl"] .arrow-icon::before { content: "‹"; font-size: 20px; }
        html[dir="ltr"] .arrow-icon::before { content: "›"; font-size: 20px; }

        .share-section { text-align: center; padding: 20px 0; }
        .share-title { font-size: 14px; font-weight: bold; margin-bottom: 5px; }
        .share-desc { font-size: 12px; color: var(--text-sub); margin-bottom: 12px; }

        .elena-credit { font-size: 11px; color: var(--text-sub); text-align: center; padding: 15px 0; font-style: italic; opacity: 0.7; letter-spacing: 0.5px; }

        /* صفحة الفيلم المنفصلة الكاملة */
        .full-page-player { padding-top: 10px; }
        .back-nav-btn { display: inline-flex; align-items: center; gap: 5px; background: transparent; border: none; color: var(--text-main); font-size: 15px; font-weight: bold; cursor: pointer; margin-bottom: 15px; }
        .video-container { position: relative; padding-bottom: 56.25%; height: 0; width: 100%; background-color: #000; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); }
        .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
        .player-controls { display: flex; gap: 8px; padding: 12px; background-color: var(--bg-surface); justify-content: center; flex-wrap: wrap; border-radius: 0 0 12px 12px; border: 1px solid var(--border-color); border-top: none; }
        .server-btn, .cast-btn {
            background-color: var(--bg-card);
            color: var(--text-main); border: 1px solid var(--border-color); padding: 8px 14px;
            font-size: 12px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; font-weight: bold;
        }
        .server-btn.active { background-color: var(--accent); border-color: var(--accent); color: #fff; }
        .cast-btn { background-color: #28a745; border-color: #28a745; color: #fff; }
        
        .media-info-block { padding: 15px 0; }
        .media-title-row { font-size: 20px; font-weight: bold; margin: 0 0 5px 0; }
        .media-meta-row { font-size: 12px; color: var(--text-sub); margin-bottom: 12px; display: flex; gap: 10px; align-items: center; }
        .media-description { font-size: 13px; color: var(--text-sub); line-height: 1.6; margin-bottom: 20px; }

        /* قسم الممثلين الاحترافي */
        .cast-container { margin-top: 20px; }
        .cast-slider { display: flex; gap: 15px; overflow-x: auto; padding-bottom: 10px; width: 100%; }
        .cast-slider::-webkit-scrollbar { height: 4px; }
        .cast-slider::-webkit-scrollbar-thumb { background-color: var(--border-color); border-radius: 4px; }
        .cast-card { min-width: 70px; text-align: center; }
        .cast-avatar { width: 65px; height: 65px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color); margin-bottom: 5px; display: block; margin-left: auto; margin-right: auto; }
        .cast-name { font-size: 11px; font-weight: 500; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 75px; margin: 0 auto; }

        /* تخصيصات قسم التعليقات الجديد والمدمج بشكل متناسق */
        .comments-section { margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 20px; }
        .comments-list { display: flex; flex-direction: column; gap: 10px; margin-top: 15px; }
        .comment-item { background-color: var(--bg-surface); border: 1px solid var(--border-color); padding: 12px; border-radius: 8px; }
        .comment-user { font-size: 12px; font-weight: bold; color: var(--accent); margin-bottom: 4px; display: flex; align-items: center; gap: 5px; }
        .comment-text { font-size: 13px; color: var(--text-main); line-height: 1.5; margin: 0; word-break: break-word; }
        .comment-input-box { display: flex; gap: 10px; margin-top: 15px; }
        .comment-input-box input { flex: 1; background-color: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 20px; padding: 10px 15px; font-size: 13px; outline: none; }
        .comment-submit-btn { background-color: var(--accent); color: #fff; border: none; border-radius: 20px; padding: 0 20px; font-size: 13px; font-weight: bold; cursor: pointer; }

        /* نافذة تسجيل الدخول المنبثقة المبسطة */
        .auth-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8);
            display: none; justify-content: center; align-items: center; z-index: 1000; padding: 15px;
        }
        .auth-box {
            background-color: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: 12px; width: 100%; max-width: 340px; padding: 20px; box-sizing: border-box; position: relative;
        }
        .auth-box h3 { margin-top: 0; font-size: 16px; margin-bottom: 15px; text-align: center; }
        .auth-box input {
            width: 100%;
            padding: 10px; margin-bottom: 10px; box-sizing: border-box;
            background-color: var(--bg-main); border: 1px solid var(--border-color);
            color: var(--text-main); border-radius: 6px; outline: none;
        }
        .auth-box button {
            width: 100%;
            padding: 10px; background-color: var(--accent); color: white;
            border: none; font-weight: bold; border-radius: 6px; cursor: pointer; margin-bottom: 10px;
        }
        .auth-toggle-link { text-align: center; font-size: 12px; color: var(--text-sub); cursor: pointer; text-decoration: underline; }
        .close-auth { position: absolute; top: 10px; font-size: 20px; cursor: pointer; color: var(--text-sub); }
        html[dir="rtl"] .close-auth { left: 15px; }
        html[dir="ltr"] .close-auth { right: 15px; }

        /* مفاتيح التبديل الفعالة داخل الإعدادات */
        .toggle-switch { display: inline-flex; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 15px; padding: 2px; }
        .toggle-btn { padding: 4px 12px; border-radius: 12px; font-size: 11px; color: var(--text-sub); font-weight: bold; cursor: pointer; }
        .toggle-btn.active { background-color: var(--accent); color: #fff; }

        .no-results { display: none; text-align: center; padding: 30px 15px; color: var(--text-sub); font-size: 13px; }
    </style>
</head>
<body>

    <script src="data.js"></script>

    <header>
        <div class="logo-text" id="txtLogo">🎬 سينما فلوكس | CinemaFlux</div>
    </header>

    <div class="container">
        
        <div id="viewHome" class="app-view active">
            <div class="slider-container">
                <div class="featured-slider" id="featuredSlider"></div>
            </div>

            <div id="dynamicCategoriesBlock"></div>
        </div>

        <div id="viewCategoryDetail" class="app-view">
            <button class="back-nav-btn" onclick="closeCategoryPage()">➔ <span id="txtBackToMainFromCat">الرئيسية</span></button>
            <div class="row-header">
                <div class="row-title" id="currentCategoryTitle" style="cursor: default;">التصنيف</div>
            </div>
            <div class="category-grid" id="categoryGridItems"></div>
        </div>

        <div id="viewSearch" class="app-view">
            <div class="search-container">
                <div class="search-bar-wrapper">
                    <span class="voice-icon">🎤</span>
                    <input type="text" id="searchInput" placeholder="ابحث عن اسم الفيلم أو المسلسل..." oninput="handleSearchSearch()">
                </div>

                <div id="searchHistoryBlock">
                    <div class="recent-searches-title" id="txtRecentSearches">عمليات البحث الأخيرة</div>
                    <div class="search-list-vertical" id="searchHistoryList"></div>
                </div>

                <div id="searchResultsBlock" style="display: none; margin-top: 15px;">
                    <div class="recent-searches-title" id="txtSearchResultsTitle">نتائج البحث</div>
                    <div class="search-list-vertical" id="searchResultsList"></div>
                </div>

                <div id="noResultsMessage" class="no-results">عذراً لا توجد نتائج ، قم بإدخال كلمات مختلفة 🔍</div>
            </div>
        </div>

        <div id="viewProfile" class="app-view">
            <div class="profile-card">
                <div class="profile-title" id="userDisplayTitle">هل لديك حساب?</div>
                <div class="profile-subtitle" id="userDisplaySubtitle">سجل الدخول واكتشف المزيد</div>
                <button class="profile-btn" id="authBtnAction" onclick="openAuthModal()">تسجيل الدخول</button>
            </div>

            <div class="list-menu">
                <div class="menu-item" onclick="switchView('viewHistory')">
                    <div class="menu-label">⏱️ <span id="txtMenuHistory">سجل المشاهدة</span></div>
                    <span class="arrow-icon"></span>
                </div>
                <div class="menu-item" onclick="switchView('viewSettings')">
                    <div class="menu-label">⚙️ <span id="txtMenuSettings">الإعدادات</span></div>
                    <span class="arrow-icon"></span>
                </div>
            </div>

            <div class="profile-card" style="margin-top: 15px; padding: 15px;">
                <div class="share-title" id="txtShareApp">هل أعجبك الموقع؟</div>
                <div class="share-desc" id="txtShareDesc">أخبر أصدقائك.</div>
                <button class="profile-btn" id="btnShareSubmit" onclick="shareAppAction()">شارك التطبيق</button>
            </div>

            <div class="elena-credit">تم التطوير من قبل Elena</div>
        </div>

        <div id="viewSettings" class="app-view">
            <button class="back-nav-btn" onclick="switchView('viewProfile')">➔ <span id="txtBackToProfile">رجوع</span></button>
            <div class="row-header"><div class="row-title" id="txtSettingsTitlePage">الإعدادات العامة</div></div>
            
            <div class="list-menu">
                <div class="menu-item" onclick="clearSearchHistoryAction()">
                    <div class="menu-label">🗑️ <span id="txtSettingClearSearch">مسح سجل البحث</span></div>
                    <span class="profile-btn" style="padding: 4px 10px; font-size: 11px;" id="txtBtnClearAllSearch">مسح الكل</span>
                </div>
                <div class="menu-item">
                    <div class="menu-label">🌐 <span id="txtSettingLang">اللغة</span></div>
                    <div class="toggle-switch">
                        <span class="toggle-btn active" id="settingLangAr" onclick="setLanguage('ar')">عربي</span>
                        <span class="toggle-btn" id="settingLangEn" onclick="setLanguage('en')">En</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-label">🌓 <span id="txtSettingTheme">الوضع</span></div>
                    <div class="toggle-switch">
                        <span class="toggle-btn active" id="themeDarkBtn" onclick="setTheme('dark')">غامق</span>
                        <span class="toggle-btn" id="themeLightBtn" onclick="setTheme('light')">فاتح</span>
                    </div>
                </div>
            </div>
        </div>

        <div id="viewHistory" class="app-view">
            <button class="back-nav-btn" onclick="switchView('viewProfile')">➔ <span id="txtBackFromHistory">رجوع</span></button>
            <div class="row-header">
                <div class="row-title" id="txtWatchHistoryTitlePage">سجل المشاهدة مؤخراً</div>
                <span class="profile-btn" style="padding: 4px 10px; font-size: 11px; background-color: #dc3545; color: #fff;" id="txtClearWatchHistoryBtn" onclick="clearWatchHistoryAction()">مسح الكل</span>
            </div>
            <div class="search-list-vertical" id="fullWatchHistoryList"></div>
        </div>

        <div id="viewMovieDetail" class="app-view">
            <button class="back-nav-btn" onclick="closeMoviePage()">➔ <span id="txtBackToMain">الرئيسية</span></button>
            
            <div id="seriesStructureContainer" style="display:none; background: var(--bg-card); padding:15px; border-radius:12px; margin-bottom:15px; border:1px solid var(--border-color); direction: rtl;"></div>

            <div class="video-container" id="mainVideoContainer">
                <iframe id="mainIframe" src="" allowfullscreen="true" scrolling="no"></iframe>
            </div>
            <div class="player-controls" id="mainPlayerControls">
                <button class="server-btn active" id="btnHD" onclick="changeServer('HD')">سيرفر عالي الجودة</button>
                <button class="server-btn" id="btnSD" onclick="changeServer('SD')">سيرفر إنترنت ضعيف</button>
                <button class="cast-btn" id="btnCast" onclick="castToTV()">📺 بث للشاشة</button>
            </div>
            
            <div class="media-info-block">
                <h1 id="currentTitle" class="media-title-row">-</h1>
                <div class="media-meta-row">
                    <span class="imdb-badge" id="currentRating">0.0</span>
                    <span id="currentMetaInfo">-</span>
                </div>
                <p id="currentDesc" class="media-description">-</p>

                <div class="cast-container" id="castContainerBlock">
                    <div class="row-title" style="font-size: 14px; margin-bottom: 10px; padding: 0;" id="txtCastTitle">الكادر والطاقم</div>
                    <div class="cast-slider" id="castListSlider"></div>
                </div>

                <div class="comments-section">
                    <div class="row-title" style="font-size: 14px; padding: 0;" id="txtCommentsTitle">آراء وتعليقات المشاهدين</div>
                    <div class="comments-list" id="commentsListContainer"></div>
                    <div class="comment-input-box">
                        <input type="text" id="commentTextInput" placeholder="اكتب تعليقك هنا بكل حرية...">
                        <button class="comment-submit-btn" onclick="addCommentAction()">إرسال</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="bottom-nav">
        <div class="nav-item active" id="navHome" onclick="switchNav('home')">
            <span class="nav-icon">🏠</span>
            <span id="txtNavHome">الرئيسية</span>
        </div>
        <div class="nav-item" id="navSearch" onclick="switchNav('search')">
            <span class="nav-icon">🔍</span>
            <span id="txtNavSearch">بحث</span>
        </div>
        <div class="nav-item" id="navProfile" onclick="switchNav('profile')">
            <span class="nav-icon">👤</span>
            <span id="txtNavProfile">الحساب</span>
        </div>
    </div>

    <div class="auth-overlay" id="authModal">
        <div class="auth-box">
            <span class="close-auth" onclick="closeAuthModal()">×</span>
            <h3 id="authModalTitle">تسجيل الدخول</h3>
            <input type="text" id="authUsername" placeholder="اسم المستخدم">
            <input type="password" id="authPassword" placeholder="كلمة المرور">
            <button id="authPrimaryBtn" onclick="handleAuthSubmit()">تسجيل الدخول</button>
            <div class="auth-toggle-link" id="authToggleText" onclick="toggleAuthMode()">ليس لديك حساب؟ إنشاء حساب جديد</div>
        </div>
    </div>

    <script>
        // قواعد البيانات المحفوظة محلياً والمطورة
        let allMoviesData = [];
        let currentLang = 'ar';
        let currentTheme = 'dark';
        let currentUser = JSON.parse(localStorage.getItem('cf_user')) || null;
        
        let searchHistory = JSON.parse(localStorage.getItem('cf_search_history')) || [];
        let watchHistory = JSON.parse(localStorage.getItem('cf_watch_history')) || [];

        let activeMovieItem = null;
        let currentHD = "", currentSD = "";

        // حزمة الترجمة الكاملة للغات
        const langPack = {
            ar: {
                logo: "🎬 سينما فلوكس | CinemaFlux", navHome: "الرئيسية", navSearch: "بحث", navProfile: "الحساب",
                searchPlaceholder: "ابحث عن اسم الفيلم أو المسلسل...", recentSearches: "عمليات البحث الأخيرة",
                searchResultsTitle: "نتائج البحث", noResults: "عذراً لا توجد نتائج ، قم بإدخال كلمات مختلفة 🔍",
                moviesSection: "قسم الأفلام", seriesSection: "قسم المسلسلات", watchHistoryTitle: "سجل المشاهدة",
                settingsTitle: "الإعدادات", shareApp: "هل أعجبك الموقع؟", shareDesc: "أخبر أصدقائك.",
                btnShare: "شارك التطبيق", btnLogin: "تسجيل الدخول", btnLogout: "تسجيل الخروج",
                userDefaultTitle: "هل لديك حساب؟", userDefaultSub: "سجل الدخول واكتشف المزيد",
                backToProfile: "رجوع", settingsTitlePage: "الإعدادات العامة", clearSearch: "مسح سجل البحث",
                clearAllBtn: "مسح الكل", settingLang: "اللغة", settingTheme: "الوضع",
                themeDark: "غامق", themeLight: "فاتح", backToMain: "الرئيسية", hdServer: "سيرفر عالي الجودة",
                sdServer: "سيرفر إنترنت ضعيف", castBtn: "📺 بث للشاشة", castTitle: "الكادر والطاقم",
                watchHistoryPageTitle: "سجل المشاهدة مؤخراً", watchNow: "شاهد الآن"
            },
            en: {
                logo: "🎬 CinemaFlux", navHome: "Home", navSearch: "Search", navProfile: "Profile",
                searchPlaceholder: "Search for movie or series name...", recentSearches: "Recent Searches",
                searchResultsTitle: "Search Results", noResults: "Sorry, no results found. Enter different words 🔍",
                moviesSection: "Movies Section", seriesSection: "Series Section", watchHistoryTitle: "Watch History",
                settingsTitle: "Settings", shareApp: "Do you like the app?", shareDesc: "Tell your friends.",
                btnShare: "Share App", btnLogin: "Log In", btnLogout: "Log Out",
                userDefaultTitle: "Have an account?", userDefaultSub: "Log in to discover more",
                backToProfile: "Back", settingsTitlePage: "General Settings", clearSearch: "Clear Search History",
                clearAllBtn: "Clear All", settingLang: "Language", settingTheme: "Theme",
                themeDark: "Dark", themeLight: "Light", backToMain: "Home", hdServer: "High Quality Server",
                sdServer: "Low Internet Server", castBtn: "📺 Cast to TV", castTitle: "Cast & Crew",
                watchHistoryPageTitle: "Recently Watched", watchNow: "Watch Now"
            }
        };

        let authMode = 'login'; // login أو register

        window.addEventListener('DOMContentLoaded', () => {
            // جلب البيانات من data.js
            if (typeof globalMoviesData !== 'undefined') {
                allMoviesData = globalMoviesData;
            } else {
                // بيانات تجريبية في حال غياب ملف data.js
                allMoviesData = [
                    { title: "هوس", type: "movie", rating: "8.2", genre: "رعب, رومانسي", year: "2025", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400", desc: "في إطار من الرعب، يتمنى شاب حالم أمنية بهدف الفوز بقلب الفتاة التي يحبها...", hdUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", sdUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", cast: [{name: "Andy", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"}, {name: "Cooper", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100"}] },
                    { title: "الشيطان يرتدي برادا 2", type: "movie", rating: "6.6", genre: "كوميدي", year: "2026", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400", hdUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", sdUrl: "", cast: [] },
                    { title: "Silo", type: "series", rating: "8.8", genre: "خيال علمي", year: "2024", poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400", hdUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", sdUrl: "", cast: [] }
                ];
            }

            // إعداد التطبيق الأولي
            updateUserUI();
            renderHomeDOM();
            renderSearchHistoryUI();
            applyLocalization();
        });

        // ================= نظام التنقل والتبديل الأساسي =================
        function switchNav(target) {
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.app-view').forEach(el => el.classList.remove('active'));

            if (target === 'home') {
                document.getElementById('navHome').classList.add('active');
                document.getElementById('viewHome').classList.add('active');
            } else if (target === 'search') {
                document.getElementById('navSearch').classList.add('active');
                document.getElementById('viewSearch').classList.add('active');
                renderSearchHistoryUI();
            } else if (target === 'profile') {
                document.getElementById('navProfile').classList.add('active');
                document.getElementById('viewProfile').classList.add('active');
            }
        }

        function switchView(viewId) {
            document.querySelectorAll('.app-view').forEach(el => el.classList.remove('active'));
            document.getElementById(viewId).classList.add('active');
            if(viewId === 'viewHistory') {
                renderWatchHistoryUI();
            }
        }

        // ================= بناء محتويات الصفحة الرئيسية بالتصنيفات الديناميكية =================
        function renderHomeDOM() {
            const featuredSlider = document.getElementById('featuredSlider');
            const categoriesBlock = document.getElementById('dynamicCategoriesBlock');
            
            featuredSlider.innerHTML = '';
            if (categoriesBlock) categoriesBlock.innerHTML = '';

            // 1. عرض أول 10 عناصر مباشرة (الأحدث على الإطلاق) في السلايدر العلوي
            const newestItems = [...allMoviesData].slice(0, 10);
            newestItems.forEach(item => {
                const slide = document.createElement('div');
                slide.className = 'slide-item';
                slide.innerHTML = `
                    <img class="slide-img" src="${item.poster}" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400'">
                    <div class="slide-details">
                        <div class="slide-title">${item.title}</div>
                        <button class="slide-btn">▶ <span class="lbl-watch-now">${langPack[currentLang].watchNow}</span></button>
                    </div>
                `;
                slide.onclick = () => openMoviePage(item);
                featuredSlider.appendChild(slide);
            });

            // 2. نظام التصنيفات الديناميكي الذكي
            const genresMap = {};

            allMoviesData.forEach(item => {
                if (item.genre) {
                    const genresList = item.genre.trim().split(/\s+/).map(g => g.trim());
                    genresList.forEach(genre => {
                        if (!genresMap[genre]) genresMap[genre] = [];
                        genresMap[genre].push(item);
                    });
                } else {
                    const defaultGenre = currentLang === 'ar' ? 'عام' : 'General';
                    if (!genresMap[defaultGenre]) genresMap[defaultGenre] = [];
                    genresMap[defaultGenre].push(item);
                }
            });

            // 3. بناء وتوليد القوائم والسلايدرز لكل تصنيف في واجهة الموقع
            for (const genre in genresMap) {
                if (genresMap[genre].length === 0) continue;

                const categorySection = document.createElement('div');
                categorySection.style.marginBottom = '25px';

                const rowHeader = document.createElement('div');
                rowHeader.className = 'row-header';
                rowHeader.innerHTML = `<div class="row-title">${genre}</div>`;
                
                // جعل العنوان يفتح الصفحة الكاملة للتصنيف عند الضغط عليه
                rowHeader.querySelector('.row-title').onclick = () => openCategoryPage(genre, genresMap[genre]);
                categorySection.appendChild(rowHeader);

                const moviesSlider = document.createElement('div');
                moviesSlider.className = 'movies-slider';

                genresMap[genre].forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'movie-card';
                    card.innerHTML = `
                        <div class="poster-wrapper">
                            <img class="movie-poster" src="${item.poster}" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400'">
                        </div>
                        <div class="movie-info">
                            <p class="movie-name">${item.title}</p>
                            <div class="movie-meta">
                                <span class="imdb-badge">${item.rating || 'N/A'}</span>
                                <span style="font-size:10px; margin-top:2px;">${item.year || ''}</span>
                            </div>
                        </div>
                    `;
                    card.onclick = () => openMoviePage(item);
                    moviesSlider.appendChild(card);
                });

                categorySection.appendChild(moviesSlider);
                if (categoriesBlock) categoriesBlock.appendChild(categorySection);
            }
        }

        // ================= فتح وإغلاق الصفحة الكاملة لتصنيف معين =================
        function openCategoryPage(genreName, items) {
            document.querySelectorAll('.app-view').forEach(el => el.classList.remove('active'));
            document.getElementById('viewCategoryDetail').classList.add('active');
            document.getElementById('currentCategoryTitle').innerText = genreName;
            
            const gridContainer = document.getElementById('categoryGridItems');
            gridContainer.innerHTML = '';
            
            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.style.maxWidth = '100%';
                card.innerHTML = `
                    <div class="poster-wrapper">
                        <img class="movie-poster" src="${item.poster}" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400'">
                    </div>
                    <div class="movie-info">
                        <p class="movie-name">${item.title}</p>
                        <div class="movie-meta">
                            <span class="imdb-badge">${item.rating || 'N/A'}</span>
                            <span style="font-size:10px; margin-top:2px;">${item.year || ''}</span>
                        </div>
                    </div>
                `;
                card.onclick = () => openMoviePage(item);
                gridContainer.appendChild(card);
            });
        }

        function closeCategoryPage() {
            switchNav('home');
        }

        // ================= دالة فتح صفحة الفيلم التفصيلية وإظهار الممثلين والمسلسلات =================
        function openMoviePage(item) {
            activeMovieItem = item;
            document.querySelectorAll('.app-view').forEach(el => el.classList.remove('active'));
            document.getElementById('viewMovieDetail').classList.add('active');
            
            const iframe = document.getElementById('mainIframe');
            const seriesContainer = document.getElementById('seriesStructureContainer');
            const playerContainer = document.getElementById('mainVideoContainer');
            const playerControls = document.getElementById('mainPlayerControls');

            if (item.type === 'series') {
                // إعدادات واجهة المسلسلات
                playerContainer.style.display = 'none';
                playerControls.style.display = 'none';
                iframe.src = "";
                
                if (seriesContainer) {
                    seriesContainer.style.display = 'block';
                    renderSeriesControls(item, seriesContainer, playerContainer, playerControls);
                }
            } else {
                // إعدادات واجهة الأفلام المعتادة
                if (seriesContainer) seriesContainer.style.display = 'none';
                playerContainer.style.display = 'block';
                playerControls.style.display = 'flex';
                
                currentHD = item.hdUrl || "";
                currentSD = item.sdUrl || item.hdUrl || "";
                iframe.src = currentHD;

                document.getElementById('btnHD').classList.add('active');
                document.getElementById('btnSD').classList.remove('active');
            }
            
            document.getElementById('currentTitle').innerText = item.title;
            document.getElementById('currentRating').innerText = item.rating || "0.0";
            document.getElementById('currentMetaInfo').innerText = `${item.year || ''} • ${item.genre || ''}`;
            document.getElementById('currentDesc').innerText = item.desc || "";
            
            // بناء الكادر والطاقم
            const sliderCast = document.getElementById('castListSlider');
            sliderCast.innerHTML = '';
            if (item.cast && item.cast.length > 0) {
                document.getElementById('castContainerBlock').style.display = 'block';
                item.cast.forEach(person => {
                    const actorImage = person.image || person.img || person.avatar || person.photo || person.pic || person.profile_path || '';
                    
                    const castCard = document.createElement('div');
                    castCard.className = 'cast-card';
                    castCard.innerHTML = `
                        <img class="cast-avatar" src="${actorImage}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'">
                        <div class="cast-name">${person.name || 'مجهول'}</div>
                    `;
                    sliderCast.appendChild(castCard);
                });
            } else {
                document.getElementById('castContainerBlock').style.display = 'none';
            }
            
            // جلب التعليقات الافتراضية
            const commentsContainer = document.getElementById('commentsListContainer');
            commentsContainer.innerHTML = `
                <div class="comment-item">
                    <div class="comment-user">👤 أحمد علي</div>
                    <p class="comment-text">فيلم رائع جداً وممتع، أنصح بالكل بمشاهدته! الكواليتي خرافية وسرعة السيرفر ممتازة.</p>
                </div>
            `;
            
            addToWatchHistory(item);
        }

        // ================= دالة بناء قوائم الحلقات والمواسم للمسلسلات ديناميكياً =================
        function renderSeriesControls(media, container, playerContainer, playerControls) {
            if (!media.seasons || media.seasons.length === 0) {
                container.innerHTML = `<p style="color:var(--accent); text-align:center; font-weight:bold; margin:0;">${currentLang === 'ar' ? 'لا توجد مواسم مضافة بعد لهذه المادة' : 'No seasons available for this media'}</p>`;
                return;
            }

            let lblSeason = currentLang === 'ar' ? 'اختر الموسم:' : 'Select Season:';
            let lblEpisode = currentLang === 'ar' ? 'اختر الحلقة:' : 'Select Episode:';
            let txtSeasonPrefix = currentLang === 'ar' ? 'الموسم' : 'Season';

            let html = `
                <div style="margin-bottom: 15px;">
                    <label style="color: var(--text-sub); display:block; margin-bottom:8px; font-weight:bold; font-size:13px;">${lblSeason}</label>
                    <select id="seasonSelect" style="width:100%; padding:10px; background:var(--bg-main); color:var(--text-main); border:1px solid var(--border-color); border-radius:8px; cursor:pointer; font-weight:bold; outline:none;">
                        ${media.seasons.map(s => `<option value="${s.season_number}">${txtSeasonPrefix} ${s.season_number}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label style="color: var(--text-sub); display:block; margin-bottom:8px; font-weight:bold; font-size:13px;">${lblEpisode}</label>
                    <div id="episodesList" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); gap:10px; max-height:160px; overflow-y:auto; padding:5px;">
                        </div>
                </div>
            `;
            container.innerHTML = html;

            const seasonSelect = document.getElementById('seasonSelect');
            
            function updateEpisodes(seasonNum) {
                const season = media.seasons.find(s => s.season_number == seasonNum);
                const epListContainer = document.getElementById('episodesList');
                if (!season || !season.episodes) {
                    epListContainer.innerHTML = '';
                    return;
                }

                epListContainer.innerHTML = season.episodes.map(ep => {
                    let safeUrl = btoa(unescape(encodeURIComponent(ep.url)));
                    return `
                        <button onclick="playEpisode('${safeUrl}')" style="background:var(--bg-main); color:var(--text-main); border:1px solid var(--border-color); padding:10px; border-radius:6px; cursor:pointer; font-weight:bold; transition:all 0.2s;" onmouseover="this.style.background='var(--accent)'; this.style.color='#fff'; this.style.borderColor='var(--accent)';" onmouseout="this.style.background='var(--bg-main)'; this.style.color='var(--text-main)'; this.style.borderColor='var(--border-color)';">
                            ${ep.episode_number}
                        </button>
                    `;
                }).join('');
            }

            seasonSelect.addEventListener('change', (e) => updateEpisodes(e.target.value));
            updateEpisodes(seasonSelect.value);
        }

        // ================= دالة تشغيل السيرفر المباشر للحلقة المختارة داخل مشغل الفيديو =================
        function playEpisode(encodedUrl) {
            const playerContainer = document.getElementById('mainVideoContainer');
            const playerControls = document.getElementById('mainPlayerControls');
            const iframe = document.getElementById('mainIframe');
            
            let decodedUrlStr = decodeURIComponent(escape(atob(encodedUrl)));
            
            // استخراج الرابط المباشر فقط من كود iframe إذا تم تمريره بالكامل
            if (decodedUrlStr.includes('<iframe')) {
                const srcMatch = decodedUrlStr.match(/src=["']([^"']+)["']/);
                if (srcMatch && srcMatch[1]) {
                    decodedUrlStr = srcMatch[1];
                }
            }

            currentHD = decodedUrlStr;
            currentSD = decodedUrlStr;
            iframe.src = decodedUrlStr;

            playerContainer.style.display = 'block';
            playerControls.style.display = 'flex';
            
            document.getElementById('btnHD').classList.add('active');
            document.getElementById('btnSD').classList.remove('active');
        }

        function closeMoviePage() {
            document.getElementById('mainIframe').src = "";
            switchNav('home');
        }

        function changeServer(type) {
            const iframe = document.getElementById('mainIframe');
            if (type === 'HD') {
                iframe.src = currentHD;
                document.getElementById('btnHD').classList.add('active');
                document.getElementById('btnSD').classList.remove('active');
            } else {
                iframe.src = currentSD;
                document.getElementById('btnSD').classList.add('active');
                document.getElementById('btnHD').classList.remove('active');
            }
        }

        function addCommentAction() {
            const input = document.getElementById('commentTextInput');
            const text = input.value.trim();
            if (!text) return;
            
            const commentsContainer = document.getElementById('commentsListContainer');
            const item = document.createElement('div');
            item.className = 'comment-item';
            
            const name = currentUser ? currentUser.username : (currentLang === 'ar' ? "مشاهد مجهول" : "Anonymous User");
            item.innerHTML = `
                <div class="comment-user">👤 ${name}</div>
                <p class="comment-text">${text}</p>
            `;
            commentsContainer.appendChild(item);
            input.value = "";
        }

        // ================= نظام البحث المباشر الاحترافي وسجل البحث =================
        function handleSearchSearch() {
            const query = document.getElementById('searchInput').value.toLowerCase().trim();
            const historyBlock = document.getElementById('searchHistoryBlock');
            const resultsBlock = document.getElementById('searchResultsBlock');
            const resultsList = document.getElementById('searchResultsList');
            const noResults = document.getElementById('noResultsMessage');

            if (!query) {
                resultsBlock.style.display = 'none';
                historyBlock.style.display = 'block';
                noResults.style.display = 'none';
                return;
            }

            historyBlock.style.display = 'none';
            const matches = allMoviesData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                (item.genre && item.genre.toLowerCase().includes(query))
            );

            resultsList.innerHTML = '';
            if (matches.length === 0) {
                resultsBlock.style.display = 'none';
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
                resultsBlock.style.display = 'block';
                matches.forEach(item => {
                    const row = document.createElement('div');
                    row.className = 'search-item-row';
                    row.innerHTML = `
                        <img class="search-item-poster" src="${item.poster}" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400'">
                        <div class="search-item-details">
                            <h4 class="search-item-title">${item.title}</h4>
                            <div class="search-item-meta">${item.year || ''} • ★ ${item.rating || '0.0'}</div>
                        </div>
                    `;
                    row.onclick = () => {
                        saveToSearchHistory(item.title);
                        openMoviePage(item);
                    };
                    resultsList.appendChild(row);
                });
            }
        }

        function saveToSearchHistory(term) {
            searchHistory = searchHistory.filter(x => x !== term);
            searchHistory.unshift(term);
            if(searchHistory.length > 10) searchHistory.pop();
            localStorage.setItem('cf_search_history', JSON.stringify(searchHistory));
        }

        function renderSearchHistoryUI() {
            const listContainer = document.getElementById('searchHistoryList');
            listContainer.innerHTML = '';

            if(searchHistory.length === 0) {
                document.getElementById('searchHistoryBlock').style.display = 'none';
                return;
            }

            document.getElementById('searchHistoryBlock').style.display = 'block';
            searchHistory.forEach((term, index) => {
                const matchedItem = allMoviesData.find(x => x.title.toLowerCase() === term.toLowerCase());
                const row = document.createElement('div');
                row.className = 'search-item-row';

                if (matchedItem) {
                    row.innerHTML = `
                        <img class="search-item-poster" src="${matchedItem.poster}">
                        <div class="search-item-details">
                            <h4 class="search-item-title">${matchedItem.title}</h4>
                            <div class="search-item-meta">${matchedItem.year || ''} • ★ ${matchedItem.rating || '0.0'}</div>
                        </div>
                        <span class="remove-search-btn" onclick="event.stopPropagation(); removeSearchTerm(${index})">×</span>
                    `;
                    row.onclick = () => openMoviePage(matchedItem);
                } else {
                    row.innerHTML = `
                        <div class="search-item-details" style="padding-left:10px;">
                            <h4 class="search-item-title">🔍 ${term}</h4>
                        </div>
                        <span class="remove-search-btn" onclick="event.stopPropagation(); removeSearchTerm(${index})">×</span>
                    `;
                    row.onclick = () => {
                        document.getElementById('searchInput').value = term;
                        handleSearchSearch();
                    };
                }
                listContainer.appendChild(row);
            });
        }

        function removeSearchTerm(index) {
            searchHistory.splice(index, 1);
            localStorage.setItem('cf_search_history', JSON.stringify(searchHistory));
            renderSearchHistoryUI();
        }

        function clearSearchHistoryAction() {
            if(confirm(currentLang === 'ar' ? "هل أنت متأكد من مسح سجل البحث كاملاً؟" : "Are you sure you want to clear search history?")) {
                searchHistory = [];
                localStorage.setItem('cf_search_history', JSON.stringify(searchHistory));
                renderSearchHistoryUI();
                alert(currentLang === 'ar' ? "تم مسح سجل البحث." : "Search history cleared.");
            }
        }

        // ================= سجل المشاهدة للمستخدم (مخزن محلياً) =================
        function addToWatchHistory(item) {
            watchHistory = watchHistory.filter(x => x.title !== item.title);
            watchHistory.unshift({
                title: item.title,
                poster: item.poster,
                year: item.year,
                rating: item.rating,
                timestamp: Date.now()
            });
            if(watchHistory.length > 20) watchHistory.pop();
            localStorage.setItem('cf_watch_history', JSON.stringify(watchHistory));
        }

        function renderWatchHistoryUI() {
            const listContainer = document.getElementById('fullWatchHistoryList');
            listContainer.innerHTML = '';

            if(watchHistory.length === 0) {
                listContainer.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-sub); font-size:13px;">${currentLang === 'ar' ? 'سجل المشاهدة فارغ حالياً 🎬' : 'Your watch history is currently empty 🎬'}</div>`;
                return;
            }

            watchHistory.forEach((hist) => {
                const row = document.createElement('div');
                row.className = 'search-item-row';
                row.innerHTML = `
                    <img class="search-item-poster" src="${hist.poster}" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400'">
                    <div class="search-item-details">
                        <h4 class="search-item-title">${hist.title}</h4>
                        <div class="search-item-meta">${hist.year || ''} • ★ ${hist.rating || '0.0'}</div>
                    </div>
                `;
                row.onclick = () => {
                    const originalItem = allMoviesData.find(x => x.title === hist.title);
                    if(originalItem) openMoviePage(originalItem);
                };
                listContainer.appendChild(row);
            });
        }

        function clearWatchHistoryAction() {
            if(confirm(currentLang === 'ar' ? "هل أنت متأكد من مسح سجل المشاهدة؟" : "Are you sure you want to clear your watch history?")) {
                watchHistory = [];
                localStorage.setItem('cf_watch_history', JSON.stringify(watchHistory));
                renderWatchHistoryUI();
            }
        }

        // ================= الإعدادات، التوطين واللغات والتحكم الكامل =================
        function setLanguage(lang) {
            currentLang = lang;
            document.getElementById('settingLangAr').classList.toggle('active', lang === 'ar');
            document.getElementById('settingLangEn').classList.toggle('active', lang === 'en');
            
            const htmlNode = document.getElementById('mainHtml');
            if(lang === 'ar') {
                htmlNode.setAttribute('dir', 'rtl');
                htmlNode.setAttribute('lang', 'ar');
            } else {
                htmlNode.setAttribute('dir', 'ltr');
                htmlNode.setAttribute('lang', 'en');
            }

            applyLocalization();
            renderHomeDOM();
            if(document.getElementById('viewHistory').classList.contains('active')) renderWatchHistoryUI();
        }

        function applyLocalization() {
            const dict = langPack[currentLang];
            
            document.getElementById('txtLogo').innerText = dict.logo;
            document.getElementById('txtNavHome').innerText = dict.navHome;
            document.getElementById('txtNavSearch').innerText = dict.navSearch;
            document.getElementById('txtNavProfile').innerText = dict.navProfile;

            document.getElementById('searchInput').placeholder = dict.searchPlaceholder;
            document.getElementById('txtRecentSearches').innerText = dict.recentSearches;
            document.getElementById('txtSearchResultsTitle').innerText = dict.searchResultsTitle;
            document.getElementById('noResultsMessage').innerText = dict.noResults;

            document.getElementById('txtMenuHistory').innerText = dict.watchHistoryTitle;
            document.getElementById('txtMenuSettings').innerText = dict.settingsTitle;

            document.getElementById('txtShareApp').innerText = dict.shareApp;
            document.getElementById('txtShareDesc').innerText = dict.shareDesc;
            document.getElementById('btnShareSubmit').innerText = dict.btnShare;

            document.getElementById('txtSettingClearSearch').innerText = dict.clearSearch;
            document.getElementById('txtBtnClearAllSearch').innerText = dict.clearAllBtn;
            document.getElementById('txtSettingLang').innerText = dict.settingLang;
            document.getElementById('txtSettingTheme').innerText = dict.settingTheme;
            document.getElementById('themeDarkBtn').innerText = dict.themeDark;
            document.getElementById('themeLightBtn').innerText = dict.themeLight;

            updateUserUI();

            document.getElementById('txtBackToProfile').innerText = dict.backToProfile;
            document.getElementById('txtSettingsTitlePage').innerText = dict.settingsTitlePage;
            document.getElementById('txtBackFromHistory').innerText = dict.backToProfile;
            document.getElementById('txtWatchHistoryTitlePage').innerText = dict.watchHistoryPageTitle;
            document.getElementById('txtClearWatchHistoryBtn').innerText = dict.clearAllBtn;

            document.getElementById('txtBackToMain').innerText = dict.backToMain;
            document.getElementById('txtBackToMainFromCat').innerText = dict.backToMain;
            document.getElementById('btnHD').innerText = dict.hdServer;
            document.getElementById('btnSD').innerText = dict.sdServer;
            document.getElementById('btnCast').innerText = dict.castBtn;
            document.getElementById('txtCastTitle').innerText = dict.castTitle;

            // تغيير نصوص السلايدر
            document.querySelectorAll('.lbl-watch-now').forEach(el => el.innerText = dict.watchNow);
        }

        // ================= إعدادات الوضع المضيء والداكن الحقيقي الفعال =================
        function setTheme(theme) {
            currentTheme = theme;
            document.body.setAttribute('data-theme', theme);

            document.getElementById('themeDarkBtn').classList.toggle('active', theme === 'dark');
            document.getElementById('themeLightBtn').classList.toggle('active', theme === 'light');
        }

        function castToTV() {
            alert(currentLang === 'ar' ? "قم باستخدام خاصية Smart View أو AirPlay من هاتفك للبث المتكامل." : "Please use your device's built-in Smart View or AirPlay to cast.");
        }

        // ================= نظام العضوية وتسجيل الدخول المحاكي الآمن =================
        function openAuthModal() {
            if (currentUser) {
                if(confirm(currentLang === 'ar' ? "هل تريد تسجيل الخروج؟" : "Do you want to log out?")) {
                    currentUser = null;
                    localStorage.removeItem('cf_user');
                    updateUserUI();
                    alert(currentLang === 'ar' ? "تم تسجيل الخروج بنجاح." : "Logged out successfully.");
                }
            } else {
                authMode = 'login';
                setupAuthModalUI();
                document.getElementById('authModal').style.display = 'flex';
            }
        }

        function closeAuthModal() {
            document.getElementById('authModal').style.display = 'none';
        }

        function toggleAuthMode() {
            authMode = (authMode === 'login') ? 'register' : 'login';
            setupAuthModalUI();
        }

        function setupAuthModalUI() {
            const isAr = (currentLang === 'ar');
            if (authMode === 'login') {
                document.getElementById('authModalTitle').innerText = isAr ? "تسجيل الدخول" : "Log In";
                document.getElementById('authPrimaryBtn').innerText = isAr ? "تسجيل الدخول" : "Log In";
                document.getElementById('authToggleText').innerText = isAr ? "ليس لديك حساب؟ إنشاء حساب جديد" : "Don't have an account? Register new account";
            } else {
                document.getElementById('authModalTitle').innerText = isAr ? "إنشاء حساب جديد" : "Create New Account";
                document.getElementById('authPrimaryBtn').innerText = isAr ? "تأكيد التسجيل والإنشاء" : "Register Now";
                document.getElementById('authToggleText').innerText = isAr ? "لديك حساب بالفعل؟ سجل دخولك" : "Already have an account? Log In";
            }
        }

        function handleAuthSubmit() {
            const user = document.getElementById('authUsername').value.trim();
            const pass = document.getElementById('authPassword').value.trim();
            const isAr = (currentLang === 'ar');

            if(!user || !pass) {
                alert(isAr ? "يرجى ملء جميع الحقول أولاً!" : "Please fill in all fields!");
                return;
            }

            if(authMode === 'login') {
                currentUser = { username: user };
                localStorage.setItem('cf_user', JSON.stringify(currentUser));
                alert(isAr ? `مرحباً بك مجدداً، ${user} ✨` : `Welcome back, ${user} ✨`);
            } else {
                currentUser = { username: user };
                localStorage.setItem('cf_user', JSON.stringify(currentUser));
                alert(isAr ? "تم إنشاء الحساب وتجربته بنجاح!" : "Account created successfully!");
            }

            document.getElementById('authUsername').value = "";
            document.getElementById('authPassword').value = "";
            closeAuthModal();
            updateUserUI();
        }

        function updateUserUI() {
            const dict = langPack[currentLang];
            const titleNode = document.getElementById('userDisplayTitle');
            const subNode = document.getElementById('userDisplaySubtitle');
            const btnNode = document.getElementById('authBtnAction');

            if(currentUser) {
                titleNode.innerText = currentUser.username;
                subNode.innerText = currentLang === 'ar' ? "عضو مميز في سينما فلوكس" : "Premium Member in CinemaFlux";
                btnNode.innerText = dict.btnLogout;
                btnNode.style.backgroundColor = "#dc3545";
                btnNode.style.color = "#fff";
            } else {
                titleNode.innerText = dict.userDefaultTitle;
                subNode.innerText = dict.userDefaultSub;
                btnNode.innerText = dict.btnLogin;
                btnNode.style.backgroundColor = "#fff";
                btnNode.style.color = "#000";
            }
        }

        function shareAppAction() {
            const shareText = currentLang === 'ar' ? "شاهد أحدث الأفلام والمسلسلات مجاناً وبأعلى جودة على سينما فلوكس CinemaFlux!" : "Watch latest movies and series for free in high quality on CinemaFlux!";
            if (navigator.share) {
                navigator.share({
                    title: 'CinemaFlux',
                    text: shareText,
                    url: window.location.href,
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(`${shareText} \n ${window.location.href}`);
                alert(currentLang === 'ar' ? "تم نسخ رابط الموقع بنجاح، يمكنك مشاركته الآن مع أصدقائك!" : "Website link copied successfully, you can share it now with your friends!");
            }
        }
    </script>
</body>
</html>
