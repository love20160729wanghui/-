		var together = new Date();
		together.setFullYear(2016,9,-25-1);//���һҳ��ʱ�� ��,��,
		together.setHours(0);
		together.setMinutes(0);
		together.setSeconds(0);
		together.setMilliseconds(0);
	      timeElapse(together);
			setInterval(function () {
				timeElapse(together);
			}, 500);
			
			
			
//		�����T���Ȩ���� Qq:3201775911