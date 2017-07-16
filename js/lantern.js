$(function(){
	//start 幻灯片
	var sub=0;
	var auto_h;
	$('.synopsis_right li').click(function(){
		var title=$(this).data('title');
		cur_selected($(this));
		sub=$(this).index();
		$('.video_tilte').html(title);
		$('.magic_lantern_list li').css('display','none');
		$('.magic_lantern_list li:eq('+sub+')').fadeIn(300);
		clearInterval( auto_h );
		auto_scroll();
	});

	function auto_scroll(){
		cur_selected($('.synopsis_right li:eq('+sub+')'));
		var scroll_num=$('.magic_lantern_list li').length;
		$('.magic_lantern_list li:eq('+sub+')').fadeIn(500);
		auto_h=setInterval(function(){
			if(sub==scroll_num-1){
				sub=0;
			}else{
				sub++;
			}
			$('.magic_lantern_list li').css('display','none');
			$('.magic_lantern_list li:eq('+sub+')').fadeIn(500);
			$cur_selected=$('.synopsis_right li:eq('+sub+')');
			cur_selected($cur_selected);
			var title=$cur_selected.data('title');
			$('.video_tilte').html(title);
		},3000);
	}
	auto_scroll();

	function cur_selected($this){
		$('.synopsis_right li').css({'border':'none','padding':'2px'});
		$this.css({'border':'2px solid #fff','padding':0});
	}
	//end 幻灯片
});