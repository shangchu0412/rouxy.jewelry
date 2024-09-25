
/* ========= Header區塊 ========= */

// 當進入某一選單時，下滑至子選單時讓主選單依然有hover效果
// 儲存所有 .nav-item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(function(item) {
  // 儲存對應的 .nav-dropdown
  const dropdown = item.querySelector('.nav-dropdown');

  // 當滑鼠移入 .nav-item 時，添加 active 類
  item.addEventListener('mouseenter', function() {
    item.classList.add('active');
  });

  // 當滑鼠離開 .nav-item 時，移除 active 類
  item.addEventListener('mouseleave', function() {
    setTimeout(function() {
      // 如果滑鼠不在 nav-item 或 dropdown 範圍內，才移除 active
      if (!item.matches(':hover') && !dropdown.matches(':hover')) {
        item.classList.remove('active');
      }
    }, 100);
  });

  // 當滑鼠移入到 .nav-dropdown 時，保持 active 狀態
  dropdown.addEventListener('mouseenter', function() {
    item.classList.add('active');
  });

  // 當滑鼠移出 .nav-dropdown 時，檢查滑鼠是否仍在 .nav-item 內
  dropdown.addEventListener('mouseleave', function() {
    setTimeout(function() {
      // 如果滑鼠不在 nav-item 或 dropdown 範圍內，才移除 active
      if (!item.matches(':hover') && !dropdown.matches(':hover')) {
        item.classList.remove('active');
      }
    }, 100);
  });
});

// 當每個選單子項目超過10個時，改變寬度
const navDropdowns = document.querySelectorAll('.nav-dropdown');

function updateDropdownWidth() {
  // 檢查當前視窗寬度是否大於或等於1224px
  if (window.innerWidth >= 1224) {
    navDropdowns.forEach(function(navDropdown) {
      const links = navDropdown.querySelectorAll('a');

      // 當 a 標籤超過10個時，改變該 .nav-dropdown 的寬度
      if (links.length > 10) {
        navDropdown.classList.add('w-306'); // 添加 306px 寬度的類
        navDropdown.classList.remove('w-153'); // 移除 153px 寬度的類
      } else {
        navDropdown.classList.add('w-153'); // 添加預設 153px 寬度的類
        navDropdown.classList.remove('w-306'); // 移除 306px 寬度的類
      }
    });
  }
}

// 初始執行
updateDropdownWidth();

// 在視窗調整大小時再次執行
window.addEventListener('resize', updateDropdownWidth);


const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
const navList = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const hamburgerBtn = document.querySelector('.hamburger-btn');

// 漢堡按鈕點擊事件
hamburgerBtn.addEventListener('click', function () {
    if (hamburgerCheckbox.checked === false) {
        navList.style.left = '0'; // 顯示導航列
        overlay.style.display = 'block'; // 顯示遮罩層
        console.log(hamburgerCheckbox.checked); // 在点击时查看状态

    } else {
        navList.style.left = '-100%'; // 隱藏導航列
        overlay.style.display = 'none'; // 隱藏遮罩層
        console.log(hamburgerCheckbox.checked); // 在点击时查看状态

    }
});

// 遮罩層點擊事件
overlay.addEventListener('click', function () {
    hamburgerCheckbox.checked = false; // 隱藏漢堡選單
    navList.style.left = '-100%'; // 隱藏導航列
    overlay.style.display = 'none'; // 隱藏遮罩層
});

// 視窗大小變更時隱藏已展開的導航列和遮罩層
window.addEventListener('resize', function () {
  if (window.innerWidth >= 1224) {
      hamburgerCheckbox.checked = false; // 確保漢堡選單取消選取
      navList.style.left = '-100%'; // 隱藏導航列
      overlay.style.display = 'none'; // 隱藏遮罩層
  }
});

// 獲取logo和nav-main容器
const logo = document.querySelector('.nav-main h1 a.logo');
const navMain = document.querySelector('.nav-main');

// 設定初始的logo高度和寬度
const initialLogoHeight = 81; // 原始高度
const initialWidth = 120; // 新寬度
const newMarginTop = 16; // 新的margin-top

// 設置logo樣式的函式
function setLogoStyles() {
    if (window.innerWidth < 1224) {
        logo.style.margin = '20px auto'; // 小於1224px時的margin
        logo.style.height = '81px'; // 小於1224px時的高度
        navMain.style.width = 'auto'; // 小於1224px時的寬度
    } else {
        logo.style.marginTop = '71px'; // 大於等於1224px時的margin-top
        logo.style.marginBottom = '0'; // 確保不會有margin-bottom
        navMain.style.width = 'auto'; // 可以根據需要設置
        logo.style.height = '81px'; // 大於等於1224px時的高度
    }
}

window.addEventListener('scroll', () => {
    if (window.innerWidth >= 1224) { // 只在寬度大於等於1224時檢查滾動
        if (window.scrollY > 100) {
            // 當滾動超過100px時
            logo.style.marginTop = `${newMarginTop}px`;
            logo.style.marginBottom = '0'; // 確保在滾動時的margin-bottom為0
            navMain.style.width = `${initialWidth}px`;
            
            // 根據新寬度計算新的高度，假設原始比例為163px:81px
            const newHeight = (initialWidth / 163) * initialLogoHeight;
            logo.style.height = `${newHeight}px`;
        } else {
            // 回到原來的樣式
            logo.style.marginTop = '71px';
            logo.style.marginBottom = '0'; // 確保不會有margin-bottom
            navMain.style.width = 'auto'; // 或者設定為你需要的初始寬度
            logo.style.height = '81px'; // 回到原來的高度
        }
    } else {
        // 若小於1224，恢復原狀
        setLogoStyles(); // 調用函式
    }
});

// 監控視窗大小變化
window.addEventListener('resize', setLogoStyles);

// 初始設置
setLogoStyles();


/* ========= 返回頂端按鈕 ========= */

// 獲取按鈕元素
const backToTopButton = document.getElementById('backToTop-btn');

// 監聽滾動事件，控制按鈕的顯示與隱藏
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex'; // 滾動超過300px時顯示按鈕
    } else {
        backToTopButton.style.display = 'none'; // 回到頂部附近時隱藏按鈕
    }
});

// 點擊按鈕，回到頁面頂端
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滾動回頂端
    });
});


