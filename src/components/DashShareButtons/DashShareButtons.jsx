import {
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";

const DashShareButtons = ({ article }) => {
  const tooltip = useSelector((state) => state.tooltip);
  return (
    <>
      <Tooltip
        title="Share on Reddit"
        placement="bottom"
        disableHoverListener={tooltip.disabled}
      >
        <RedditShareButton
          url={article.web_url + " Shared from: https://euriskomobility.com/"}
          quote={"Eurisko News"}
        >
          <RedditIcon size={25} round />
        </RedditShareButton>
      </Tooltip>
      <Tooltip
        title="Share on Linkedin"
        placement="bottom"
        disableHoverListener={tooltip.disabled}
      >
        <LinkedinShareButton
          url={article.web_url + " Shared from: https://euriskomobility.com/"}
          quote={"Eurisko News"}
        >
          <LinkedinIcon size={25} round />
        </LinkedinShareButton>
      </Tooltip>
      <Tooltip
        title="Share on Whatsapp"
        placement="bottom"
        disableHoverListener={tooltip.disabled}
      >
        <WhatsappShareButton
          url={article.web_url + " Shared from: https://euriskomobility.com/"}
          quote={"Eurisko News"}
        >
          <WhatsappIcon size={25} round />
        </WhatsappShareButton>
      </Tooltip>
    </>
  );
};

export default DashShareButtons;
