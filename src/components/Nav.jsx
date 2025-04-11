import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center pl-5">
          <img
            src="https://res.cloudinary.com/drxas1wpe/image/upload/v1744380015/pqzyrehxyh2pfkx15iyc.png"
            alt="icon"
            className="rounded-full w-12 h-auto"
          />
        </div>

        <div className="px-3">
          <a href="https://www.shopify.com/fr" target="_blank" title="Shopify.com">
            <FontAwesomeIcon icon={faShopify} className="text-[green] text-3xl px-2" />
          </a>

          <a href="#" title="Eloïne DA SILVA">
            <FontAwesomeIcon icon={faCircleUser} className="text-pink-500 text-3xl px-2" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Nav;
