import './Main.css'

function Main() {
    return (
        <main className="main">
            <div className='apresentation-main'>
                <h2 className='myName'>Olá meu nome é</h2>

                <h1>João Lucas
                    <span className='apresentation-main-sub'> mas pode me chamar de
                        <span className='color-Jotta'> Jotta</span></span>
                </h1>

                <h2 className='Iam'>Eu sou desenvolvedor <span className='color-Front'>Front-End.</span></h2>
            </div>

        </main >
    );
}

export default Main;