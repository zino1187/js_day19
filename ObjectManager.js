/*
이 객체는 게임에 등장하거나, 제거될 객체들을 전담해서
관리해주는 객체다!!
예)주인공이 태어나면 이 객체에 등록을 의뢰하면 알아서 등장시킴
   총알이 적군과 마주치면, 이 객체에 삭제를 의뢰하면 알아서 하차 시킴
*/
class ObjectManager{
	//의뢰받은 객체를 objectArray라는 명단에 넣기!!
	addObject(obj){
		objectArray.push(obj);
	}
	//의뢰받은 객체를 objectArray에서 제거하기!!
	removeObject(obj){
		console.log("저 죽어요 ",objectArray.indexOf(obj)," 번째 있었어요");
		//화면에서 제거
		stage.removeChild(obj.div);

		//배열에서 제거
		objectArray.splice(objectArray.indexOf(obj),1);
	}
}

