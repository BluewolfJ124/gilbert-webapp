<style>
    * {
	box-sizing: border-box;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 90deg;
  inherits: true;
}

@property --gradX {
  syntax: '<percentage>';
  initial-value: 50%;
  inherits: true;
}

@property --gradY {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: true;
}

:root {
	--d: 2500ms;
	--angle: 90deg;
	--gradX: 100%;
	--gradY: 50%;
	--c1: rgb(247, 40, 244);
	--c2: rgba(168, 239, 255, 0.1);
}


.box {
    margin-top: 10rem;
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center;    /* Centers vertically */
    max-width: auto;
	font-size: 3vw;
	margin: max(1rem, 3vw);
	border: 0.35rem solid;
	padding: 3vw;
    text-align: center;
	border-image: conic-gradient(from var(--angle), var(--c2), var(--c1) 0.1turn, var(--c1) 0.15turn, var(--c2) 0.25turn) 30;
	animation: borderRotate var(--d) linear infinite forwards;
}

.box:nth-child(2) {
	border-image: radial-gradient(ellipse at var(--gradX) var(--gradY), var(--c1), var(--c1) 10%, var(--c2) 40%) 30;
	animation: borderRadial var(--d) linear infinite forwards;
}

@keyframes borderRotate {
	100% {
		--angle: 420deg;
	}
}

@keyframes borderRadial {
	20% {
		--gradX: 100%;
		--gradY: 50%;
	}
	40% {
		--gradX: 100%;
		--gradY: 100%;
	}
	60% {
		--gradX: 50%;
		--gradY: 100%;
	}
	80% {
		--gradX: 0%;
		--gradY: 50%;
	}
	100% {
		--gradX: 50%;
		--gradY: 0%;
	}
}
.typewriter {
  border-right: solid 3px #EA4C89;
  text-align: center;
  overflow: hidden;    
  font-family: monospace;  
  font-size: 28px;
  width: 400px;
}
.typewriter {
  animation:animated-cursor 800ms steps(36,end) infinite;
}
@keyframes animated-cursor{
  from{border-right-color: #EA4C89;}
  to{border-right-color: transparent;}
}
</style>
<div class="box bg-primary-50 dark:bg-background">
    <h2 class="typewriter text-neutral-800 dark:text-neutral-300">Welcome to my website!</h2>
</div>