import React from 'react';


export default function Index() {
    return (
		<div className="text-xl">
			<div className="text-center font-bold my-8">
				<div className="py-6">
					Mantenha-se protegido.<br/>
					Sua comunidade também.
				</div>
        <div className="py-12">
				  Compartilhe como você está.
        </div>
        <div className="w-1/6 mx-auto py-6 mb-12">
          Veja como pessoas a seu redor estão!
        </div>
			</div>
			<a href="/api/login" className="py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white">Comece aqui</a>
		</div>
    );
}