
/* Header區塊 */

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

navDropdowns.forEach(function(navDropdown) {
  // 找到每個 .nav-dropdown 中的所有 a 標籤
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

