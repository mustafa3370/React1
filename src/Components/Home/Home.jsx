import avataaars from '../../Assets/images/avataaars.svg'
import Star from '../Star/Star'
export default function Home()
{
return<>
<div class="test">
    <div className="home d-flex justify-content-center align-items-center text-white">
<div className="text-center">
<img src={avataaars} alt="" srcset=""  class="mb-3 w-450"/>
<h2 className="text-uppercase mb-3 fs-1 fw-bolder"> start Framework</h2>
<Star></Star>
<div className="fs-3">Graphic Artist - Web Designer - Illustrator</div>
</div>

    </div>
</div>
</>

}
